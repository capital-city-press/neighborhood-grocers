var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  html: '.',
  css: './css',
  haml: './haml',
  scss: './scss'
}

gulp.task('haml', function () {
  gulp.src(paths.haml + '**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest(paths.html));
});

gulp.task('sass', function () {
  gulp.src(paths.scss + '/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', ['haml', 'sass'], function () {
  gulp.watch(paths.scss + '/*.haml', ['haml']);
  gulp.watch(paths.scss + '/*.scss', ['sass']);
});

gulp.task('default', ['haml', 'sass']);

