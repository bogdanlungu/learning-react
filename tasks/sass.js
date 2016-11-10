var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpif = require('gulp-if');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var debug = true;


function bundle() {

  return gulp.src('./src/assets/scss/style.scss')
    .pipe(gulpif(debug, sourcemaps.init()))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulpif(debug, sourcemaps.init({ loadMaps: true })))
    .pipe(prefix({ browsers: ['last 5 versions', 'ie 10'] }))
    .pipe(gulpif(debug, sourcemaps.write('.')))
    .pipe(gulp.dest('./src/assets/css'));
}



module.exports = bundle;
