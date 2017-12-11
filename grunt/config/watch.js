/* jshint node: true */
'use strict';
module.exports = function (grunt) {
    grunt.config('watch', {
        styles: {
            files: ['assets/scss/**/*.scss'],
            tasks: ['sass', 'autoprefixer'],
        },
        scripts: {
            files: ['assets/js/**.js'],
            tasks: ['lint', 'copy', 'concat', 'uglify'],
        }
    });
};
