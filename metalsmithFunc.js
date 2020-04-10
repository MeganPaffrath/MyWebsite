var Metalsmith = require('metalsmith');
var Markdown = require('metalsmith-markdown'); // from package.json
var layouts = require('metalsmith-layouts');
var infoPlugin = require('./infoPlugin.js');

Metalsmith(__dirname) // __dirname is defined by node.js
  .source('./src')
  .destination('./build')
  .clean(true) // clean destination beforehand
  .use(Markdown())
  .use(layouts({
    default: "../layouts/base.njk", // the layout to use
    directory: "./src",
    pattern: ["**/*.html", "*.md", "*.jpg"]
  }))


  .build(function(err) { // build process
  if (err) throw err; // error handling is required
  });
