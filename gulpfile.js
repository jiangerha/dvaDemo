const gulp = require('gulp');
const less = require('gulp-less')
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('start')
});
gulp.task("less_change_css",function(){
    return gulp.src("src/css/less/*.less")
    .pipe(less())
    .pipe(gulp.dest("src/css/"))
})

gulp.task("updateLess",function(){
    return gulp.watch("src/css/less/*.less",["less_change_css"])
})