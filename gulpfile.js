const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');

const { series, src, watch } = require('gulp');

const scss = () => {
    return src(['!_.scss', 'src/styles/' + '**/*.scss'])
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('./public'));
};

const watchAll = () => {
    return watch(
        ['src/styles/**/*.scss', 'src/styles/**/*.css'],
        series(build)
    );
};

const build = series(scss);

module.exports = {
    default: series(build),
    watch: watchAll,
};
