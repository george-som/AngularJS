// Karma configuration
// Generated on Wed Jan 15 2014 21:40:49 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    preprocessors: {
      '/**/*.html': ['html2js']
    },
    // base path, that will be used to resolve files and exclude
    basePath: './',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'libs/angularjs/1.2.8/angular.js',
      'libs/angularjs/1.2.8/angular-*.js',
      'libs/angularjs/1.2.8/angular-mocks.js',
      'tests/test-main.js',
      'libs/mi/eventAggregator.js',
      'app/**/*.js',
      'app/**/*.html',
      'modules/**/*.js',
      'modules**/*.html',
      'tests/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      'libs/angularjs/1.2.8/angular-loader.js',
      'libs/angularjs/1.2.8/*.min.js',
      'libs/angularjs/1.2.8/angular-scenario.js',
      'libs/app/app.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
