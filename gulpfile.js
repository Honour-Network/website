const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const plumber = require('gulp-plumber');

gulp.task("fileinclude", function() {
  // 适配page中所有文件夹下的所有html，排除page下的include文件夹中html
  gulp
    .src(["src/html/**/*.html"])
    .pipe(plumber())
    .pipe(
      fileinclude({
        prefix: "@@"
      })
    )
    .pipe(gulp.dest("src/template"));
});

gulp.task("watch", function() {
  gulp.watch("src/html/**/*.html", ["fileinclude"]);
});
