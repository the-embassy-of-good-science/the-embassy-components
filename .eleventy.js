// Plugins
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Modules
const Terser = require("terser");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

    // Minify css files
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    // Copy static folder to "_site/static"
    eleventyConfig.addPassthroughCopy({ "src/static": "static" });

    // Minify javascript
    eleventyConfig.addFilter("jsmin", function(code) {
        let minified = Terser.minify(code);
        if( minified.error ) {
            console.log("Terser error: ", minified.error);
            return code;
        }

        return minified.code;
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        },
        htmlTemplateEngine: "njk"
    };
};
