var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');

gulp.task('transform', function () {
    return gulp.src('./src/index.js')
        .pipe(react({ harmony: true, es6module: true }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['transform'], function () {
    return gulp.src('./lib/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./lib'));
});
