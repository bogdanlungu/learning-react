var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


module.exports = function() {

    var bundler = browserify({
        entries: ['src/assets/js/app.jsx'],
        debug: true
    });

    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function(err) {
            console.error(err);
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/assets/dist/js'));
};
