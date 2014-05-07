var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename'); /* Wow. Such modular. Many parts. Very hip. */

gulp.task('scripts', function() {
    gulp.src('good/src/app.js')
        .pipe(browserify({
            /*
            	transform: ['coffeeify', 'deamdify', 'dogeify'] 
            	-- Transforms the bundle will be run through...  https://github.com/substack/node-browserify/wiki/list-of-transforms

            	extensions: ['.coffee'] 
            	-- Makes browserify recognize things other than .js in require('') blocks 
            */
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('good/static'))
});

gulp.task('watch', function() {
    var server = livereload();
    gulp.watch('good/src/**').on('change', function(file) {
        gulp.run('scripts');
        server.changed(file.path);
    });
});

/* 
	For More Information:
	http://viget.com/extend/gulp-browserify-starter-faq
*/