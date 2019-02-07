
var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: ['**/*.spec.js'],

    webpack: webpackConfig,

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    reporters: ['spec'],

    browsers: ['Chrome', 'Firefox']
  })
}