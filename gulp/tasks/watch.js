var gulp = require("gulp"),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

// we are using browser sync to serve the files, auto reload on save and watch
// for changes in css files and updating them via css inject
gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        /* this line removes the browser sync banner*/
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload(); /* looks for changes to the html file and reloads browser on index.html save*/
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject'); /* looks for changes in any css file and injects new css*/
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh'); /* looks for changes in any js file and injects new js changes*/

    });
});

gulp.task("cssInject", ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});
gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload(); /* runs the scripts task and refreshes browser*/
})