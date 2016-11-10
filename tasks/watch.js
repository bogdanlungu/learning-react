var gulp = require('gulp');


module.exports = function() {
    gulp.watch(['./src/assets/**/*.scss', './src/assets/**/**/*.scss'], ['sass']);
    gulp.watch(['./src/assets/js/**/*.js', './src/assets/js/**/*.jsx'], ['babel']);
    //gulp.watch('./src/assets/**/*.js', ['jslint']);
};
