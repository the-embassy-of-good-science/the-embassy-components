// Loaded modules
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// Project folder
const outputFolder = './src/static/'

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development'

  const webpackConfig = {
    entry: {
      'library': [ './src/js/library.js' ],
      'main': [ './src/js/main.js' ],
    },
    output: {
      path: path.resolve(__dirname, outputFolder),
      filename: 'js/[name].[chunkhash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js',
      // Easier navigation in Chrome dev tool source mapping:
      devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    resolve: {
      modules: [
        'node_modules',
      ]
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }

          ],
        },
        {
          test: /\.svg$/,
          use: [{
            loader: 'svg-sprite-loader',
            options: {}
          }]
        }
      ]
    },
    // https://webpack.js.org/configuration/performance/
    performance: {
      maxAssetSize: 250000,
      // maxEntrypointSize: 300000,
      hints: 'warning',
      assetFilter: function (assetFilename) {
        if (devMode) return // only run the filesize check when in production mode
        return !(/\.map$/.test(assetFilename)) // ignore .map files
      }
    },
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          'vendors': {
            test: /node_modules/,
            chunks: (chunk) => {
              return chunk.name === 'main'
            },
            name: 'vendors',
            enforce: true,
          }
        },
      }
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          path.resolve(__dirname, './docs/static/'),
          path.resolve(__dirname, './docs/bootstrap/'),
          path.resolve(__dirname, './docs/components/'),
          path.resolve(__dirname, './docs/static/js/main*'),
          path.resolve(__dirname, './docs/static/js/vendor*'),
          path.resolve(__dirname, './docs/static/js/library*'),
          path.resolve(__dirname, './docs/static/css/main*'),
          path.resolve(__dirname, './src/static/js/main*'),
          path.resolve(__dirname, './src/static/js/vendor*'),
          path.resolve(__dirname, './src/static/js/library*'),
          path.resolve(__dirname, './src/static/css/main*')
        ],
      }),
      new ManifestPlugin({
        publicPath: '/static/',
        fileName: '../_data/assets.json'
      }),
      new MiniCssExtractPlugin({
        publicPath: '/static/',
        filename: 'css/[name].[chunkhash:8].css',
      }),
      new ErrorOverlayPlugin()
    ]
  }

  if (devMode) {
    webpackConfig.optimization.minimizer.push(new TerserPlugin({
      sourceMap: true,
      cache: true,
      parallel: true,
    }))
  }

  if (!devMode) {
    webpackConfig.optimization.minimizer.push(new TerserPlugin({
      sourceMap: true,
      extractComments: true,
      cache: true,
      parallel: true,
      terserOptions: {
        mangle: {
          safari10: true,
          keep_classnames: true,
          keep_fnames: true,
        }
      }
    }))
  }

  return webpackConfig
}
