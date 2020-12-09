var gulp = require("gulp");

// var sass = require('gulp-sass');
var include = require("gulp-include");
var concat = require("gulp-concat");

// https://webref.ru/dev/automate-with-gulp/live-reloading
// http://webformyself.com/gulp-dlya-nachinayushhix/

gulp.task("css", function () {
  return gulp
    .src("source/css/*.css")
    .pipe(concat("main.css"))
    .pipe(gulp.dest("build"));
});

// инклюдим все файлы
gulp.task("inc", function () {
  return gulp
    .src("source/*.html")
    .pipe(include())
    .on("error", console.log)
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function () {
  gulp.watch("source/*.*", gulp.series("inc"));
  gulp.watch("source/css/*.css", gulp.series("css"));
});
