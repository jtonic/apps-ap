var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;

gulp.task('jshint', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('bower', function () {
    gulp.src('./web/public/index.html')
        .pipe(wiredep({}))
        .pipe(gulp.dest('./web/public'));
});

gulp.task('web', function (cb) {
    return nodemon({
        script: './web/server.js'
    }).on('start', function(){
        cb();
    })
});

gulp.task('default', ['bower', 'web'], function () {

});

