const gulp = require("gulp");
const sass = require("gulp-sass");
const cssmin = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const { series, src, watch } = require("gulp");

const scss = () => {
    return src(["!_.scss", "src/styles/base.scss"])
        .pipe(sass())
        .pipe(postcss([autoprefixer]))
        .pipe(cssmin())
        .pipe(gulp.dest("./public"));
};

const watchAll = () => {
    return watch(
        ["src/components/**/*.scss", "src/styles/*.scss"],
        series(build)
    );
};

const build = series(scss);

module.exports = {
    default: series(build),
    watch: watchAll,
};
