const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");

function copyImages() {
  return gulp.src("./src/images/**/*.{svg,webp}", {encoding: false})
  .pipe(gulp.dest("./public/images/"));
}

gulp.task("images", function () {
  return copyImages();
});

gulp.task("js", () => {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./public/js"));
});

gulp.task("html", () => {
  return gulp.src("./src/**/*.html").pipe(gulp.dest("./public/"));
});

gulp.task("returnCss", () => {
  return gulp
    .src("src/styles.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("css", () => {
  return gulp.src("./src/css/**/*.css").pipe(gulp.dest("./public/css"));
});

gulp.task("build", gulp.series(["images", "html", "css", "js"]));
gulp.task("default", gulp.series("build"));