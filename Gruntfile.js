'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      test: {
        port: 8000,
        middleware: function(connect) {
          return [
            mountFolder(connect, 'app')
          ];
        }
      }
    },

    watch: {
      files: ['test/spec/**/*.js', 'app/js/**/*.js', 'test/SpecRunner.js'],
      tasks: 'exec'
    },

    exec: {
      jasmine: {
        command: 'phantomjs test/lib/run-jasmine.js http://localhost:8000/test',
        stdout: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect:test', 'exec', 'watch']);

}
