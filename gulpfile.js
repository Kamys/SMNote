// Include Our Plugins
const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const del = require('del');


const paths = {
	styles: {
		src: 'common.blocks/workspace/css/*.css',
		dest: 'assets/styles/'
	},
	scripts: {
		src: 'common.blocks/workspace/js/*.js',
		dest: 'assets/scripts/'
	}
};

function clean() {
	return del([ 'assets' ]);
}

function styles() {
	return gulp.src(paths.styles.src)
		.pipe(cleanCSS())
		.pipe(rename({
			basename: 'main',
			suffix: '.min'
		}))
		.pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
	return gulp.src(paths.scripts.src, { sourcemaps: true })
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.styles.src, styles);
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(clean, gulp.parallel(styles, scripts));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
