// Include Gulp
var gulp = require('gulp');

// Include required plugins.
var connect = require('gulp-connect');

// TASK: connect
gulp.task('connect', function() {
  connect.server({
      livereload: true
  });
});

// TASK: preview
gulp.task('preview', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});

// TASK: watch
gulp.task('watch', function () {
    gulp.watch('*.html', ['preview']);
    gulp.watch('*.js', ['preview']);
    gulp.watch('*.css', ['preview']);
});

gulp.task('run', function() {
    console.log('warnning: No project [run] parameters configured.');
});

// Task Bundles
gulp.task('default', ['connect', 'watch']);
