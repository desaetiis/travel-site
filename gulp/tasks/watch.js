var gulp = require("gulp"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// we are using browser sync to serve the files, auto reload on save and watch
// for changes in css files and updating them via css inject
gulp.task('watch', function(){
  browserSync.init({
    notify: false, /* this line removes the browser sync banner*/
    server: {
      baseDir: "app"
    }
  })

  watch('./app/index.html', function(){
    browserSync.reload(); /* reloads browser on index.html save*/
  });
  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });
});

gulp.task("cssInject",['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
