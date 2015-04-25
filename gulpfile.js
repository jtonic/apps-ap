var gulp = require('gulp');

var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('jshint', function () {
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('express', function () {
    var express = require('express');
    var app = express();
    app.use(express.static(__dirname));
    app.listen(4000);
});

gulp.task('rest', function (cb) {
    return nodemon({
        script: './rest/api.js'
    }).on('start', function(){
        cb();
    })
});

gulp.task('web', function (cb) {
    return nodemon({
        script: './web/server.js'
    }).on('start', function(){
        cb();
    })
});

gulp.task('default', ['rest', 'web'], function () {

});

