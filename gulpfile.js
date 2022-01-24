const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: [["@babel/preset-env", { "targets":{ "node": "current" } }]]
    }))
    .pipe(gulp.dest('lib/'))
});