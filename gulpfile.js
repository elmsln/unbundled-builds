const gulp = require('gulp');
const terser = require('gulp-terser');
gulp.task(
  "default", async () => {
    // manage the es6 files
    await gulp.src('./build/es6/**/*.js')
      .pipe(terser({
        keep_fnames: true,
        mangle: false,
        compress: true,
        module: true
      }))
      .pipe(gulp.dest('./build/es6/'));
    // now the amd variations for non import() support
    return await gulp.src('./build/es6-amd/**/*.js')
      .pipe(terser({
        keep_fnames: true,
        mangle: false,
        compress: true,
        module: true
      }))
      .pipe(gulp.dest('./build/es6-amd/'));
  }
);