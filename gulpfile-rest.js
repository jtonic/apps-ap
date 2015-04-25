var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('rest', function (cb) {
    return nodemon({
        script: './rest/api.js'
    }).on('start', function(){
        cb();
    })
});

gulp.task('default', ['rest'], function () {

});
