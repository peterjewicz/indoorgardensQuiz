/* jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('sass', {
        options: {
          sourceMap: true
        },
        dist: {
          options: {
            outputStyle: 'compact'
          },
          files: {
            'assets/css/site.css': 'assets/scss/site.scss',
          }
        }
    });
};
