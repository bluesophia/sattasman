var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
  console.log('test gulp');
});

gulp.task('default', function(){
  console.log('test gulp');
});

gulp.task('html', function(){
  console.log("html task")
});

gulp.task('styles',function(){
  return gulp.src('./app/assets/css/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    gulp.start('html');
  })

  watch('./app/index.html', function(){
    browserSync.reload();
  })

  watch('./app/assets/css/**/*.css', function(){
    gulp.start('styles');
  })
});



