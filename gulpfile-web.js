var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('jshint', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('web', function (cb) {
    return nodemon({
        script: './web/server.js'
    }).on('start', function(){
        cb();
    })
});

gulp.task('default', ['web'], function () {

});

