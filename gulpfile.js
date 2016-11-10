var gulp = require('gulp');
var sass = require('./tasks/sass');
var jslint = require('./tasks/jslint');
var babel = require('./tasks/babel');
var dist = require('./tasks/dist');
var sync = require('./tasks/sync');
var watch = require('./tasks/watch');
var generate = require('./tasks/generate');


/* --------------------- */
/* ------- Tasks ------- */
/* --------------------- */

gulp.task('sass', sass);
gulp.task('jslint', jslint);
gulp.task('babel', babel);
gulp.task('sync', sync);
gulp.task('dist', dist);
gulp.task('watch', watch);
gulp.task('generate', generate);


/* ----------------------- */
/* ------- Default ------- */
/* ----------------------- */

gulp.task('default', ['watch', 'sync']);
