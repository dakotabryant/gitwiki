var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext');

gulp.task('watch', ['sass'], function() {
    gulp.watch([
        'sass/main.sass',
    ], ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('sass/main.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([
            cssnext({
                browsers: ['last 2 version'],
                customProperties: true,
                colorFunction: true,
                customSelectors: true,
                compress: false
            })
        ]))
        .pipe(gulp.dest('css/'));
});

gulp.task('default', ['watch']);
