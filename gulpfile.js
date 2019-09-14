const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

// COMPILE SCSS INTO CSS

const style = () => {
    // where is my scss file
    return gulp.src('styles/scss/**/*.scss')
    // pass the file thought sass compiler
    .pipe(sass().on('error', sass.logError))
    //where do i save the compiled css file
    .pipe(gulp.dest('styles/css'))
    // stream changes to all browsers
    .pipe(browserSync.stream())
}

// WATCH FOR CHANGES ON STYLES


const watch = () => {
    browserSync.init({
    server: {
        baseDir: './'
    }
    })
    gulp.watch('styles/scss/**/*.scss', style)
    gulp.watch('**/*.html').on('change', browserSync.reload)
    gulp.watch('js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch