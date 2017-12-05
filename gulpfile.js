var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var project = require('./project.json');

// Load Tasks
gulp.task('server', require('./gulp-tasks/server')(gulp, plugins));
gulp.task('vendor-js', require('./gulp-tasks/vendor-js')(gulp, plugins));
gulp.task('vendor-css', require('./gulp-tasks/vendor-css')(gulp, plugins));
gulp.task('lint', require('./gulp-tasks/lint')(gulp, plugins));
gulp.task('default', ['vendor-js','vendor-css','server']);