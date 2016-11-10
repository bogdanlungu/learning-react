var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


module.exports = function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['./src/**/*.scss', './src/*.html', './src/**/*.js']).on('change', browserSync.reload);
}
