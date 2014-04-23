var gulp = require('gulp'),
    lr = require('gulp-livereload'),
    dest = 'src';

gulp.task('server', function(next) {
  var connect = require('connect'),
      server = connect();
  server.use(connect.static(dest)).listen(process.env.PORT || 8080, next);
});

gulp.task('watch', ['server'], function() {
  var server = lr();
  gulp.watch(dest + '/**').on('change', function(file) {
    server.changed(file.path);
  });
});