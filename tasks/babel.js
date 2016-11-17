var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


module.exports = function() {

    /* Bundling function for JSX 
    ----------------------------------- */
    function bundleJSX(bundler, src) {

        bundler.transform(babelify);

        bundler.bundle()
            .on('error', function(err) {
                console.error(err);
            })
            .pipe(source(src))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('src/assets/dist/js'));
    }


    /* Sources to transform
    ----------------------------------- */
    var sources = {
        app: browserify({
            entries: ['src/assets/js/app.jsx'],
            debug: true
        }),

        github: browserify({
            entries: ['src/assets/js/github.jsx'],
            debug: true
        }),

        game: browserify({
            entries: ['src/assets/js/game.jsx'],
            debug: true
        })
    };


    /* Call bundler
    ----------------------------------- */
    bundleJSX(sources.app, 'app.js');
    bundleJSX(sources.github, 'github.js');
    bundleJSX(sources.game, 'game.js');
};
