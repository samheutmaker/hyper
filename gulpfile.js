const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');


const files = {
	html: [__dirname + '/app/*.html', __dirname + '/app/**/**/*.html'],
	js: [],
	sass: []
};

// HTML
gulp.task('dev:html', () => {
	gulp.src(files.html)
	.pipe(gulp.dest("./build"));
});