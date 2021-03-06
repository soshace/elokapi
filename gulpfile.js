var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src': ['./models/**/*.js', './routes/**/*.js', 'keystone.js', 'package.json']
};


// gulp lint
gulp.task('lint', function() {
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));

});

// gulp watcher for lint
gulp.task('watch:lint', function() {
	gulp.src(paths.src)
		.pipe(watch())
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

gulp.task('less', function() {
	gulp.src('./public/styles/site.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/styles'));
});

gulp.task('watch:less', function() {
	gulp.src('./public/styles/site.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./public/styles'));
});
