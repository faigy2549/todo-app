module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/test.ts',
        { pattern: 'src/**/*.spec.ts', watched: false },
      ],
      preprocessors: {
        'src/test.ts': ['@angular-devkit/build-angular'],
      },
      reporters: ['progress', 'kjhtml'],
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true,
      angularCli: {
        environment: 'dev',
      },
    });
  };
  