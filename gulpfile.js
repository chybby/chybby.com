var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var notify = require('gulp-notify');
var del = require('del');

gulp.task('default', ['clean'], function() {
    gulp.start('css');
});

gulp.task('clean', function() {
    return del(['static/css']);
});

gulp.task('css', function() {
  return sass('css/chybby.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('static/css'))
    .pipe(notify({ message: 'CSS task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['css']);
});
