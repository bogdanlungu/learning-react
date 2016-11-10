var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');



function cssminify() {

    return gulp.src('./src/assets/css/style.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./src/css'));
}


function jsminify() {

    return gulp.src([ /* add sources here */ ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./src/js'))
        .pipe(rename('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js'));
}



module.exports = function() {
    // minify CSS
    cssminify();
    // minify JS
    jsminify();
};
