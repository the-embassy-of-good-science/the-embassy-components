const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Terser = require("terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);

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
