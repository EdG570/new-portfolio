var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('minifyHTML', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build'))
});

gulp.task('copy-html', function(){
  gulp.src('app/*.html')
      .pipe(gulp.dest('build'))
});

gulp.task('sass', function() {
  return gulp.src('app/styles/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
  }))
});

gulp.task('useref', function() {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('build'))
});

gulp.task('images', function() {
  return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin({
      interlaced: true
    }))
    .pipe(gulp.dest('build/img'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/styles/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean:build', function() {
  return del.sync('build');
});

gulp.task('build', function(callback) {
  runSequence('clean:build', 
    ['sass', 'useref', 'images', 'copy-html'],
    ['minifyHTML']),
    callback
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch']),
  callback
});
