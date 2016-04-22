const gulp       = require('gulp'),
      rename     = require('gulp-rename'),
      uglify     = require('gulp-uglify'),
      browserify = require('browserify'),
      source     = require('vinyl-source-stream'),
      buffer     = require('vinyl-buffer');

gulp.task('compile', () => {
    "use strict";

    let config = {
        entries   : 'src/cb.directives.parallaxbackgroundmoover.js',
        debug     : true,
        plugin    : ['bundle-collapser/plugin'],
        standalone: '_cbDirectivesParallaxbackgroundmooverModuleName'
    };

    return browserify(config)
        .transform('babelify')
        .transform('browserify-shim')
        .bundle()
        .pipe(source('cb.directives.parallaxbackgroundmoover.js'))
        .pipe(buffer())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', ['compile'], function() {
    gulp.src('dist/cb.directives.parallaxbackgroundmoover.js')
        .pipe(uglify())
        .pipe(rename('cb.directives.parallaxbackgroundmoover.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify']);
