var gulp = require("gulp"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');


// here we are taking the styles.css (working file) and piping it through some filters and generating
// the production css file
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', function(errorInfo) {
            /* we set up the task so it doesn't shut down gulp watch and instead it notifies us with a error message*/
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});