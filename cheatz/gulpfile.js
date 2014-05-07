'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var open = require('gulp-open');
var rename = require('gulp-rename'); /* Wow. Such modular. Many parts. Very hip. */


gulp.task('scripts', function() {
    gulp.src('good/src/app.js')
        .pipe(browserify({
            debug: true
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('good/static'))
        .pipe(open("", {
            app: "Google Chrome",
            url: "http://localhost:3800/good.html"
        }));
});

gulp.task('server', ['scripts'], function(next) { // Orchestrator is what runs the dependent scripts for Gulp
    var connect = require('connect'),
        server = connect();
    server.use(connect.static('good')).listen(process.env.PORT || 3800, next);

});

gulp.task('default', ['server'], function() {
    var server = livereload();
    gulp.watch('good/src/**/*.js').on('change', function(file) {
        gulp.run('scripts');
        console.log('Gulp Watch: File changed! Path: ' + file.path);
        server.changed(file.path);
    });
});