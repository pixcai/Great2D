const gulp = require('gulp')
const webpack = require('webpack-stream')
const del = require('del')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

gulp.task('build', () => {
  gulp
    .src('src/great2d.js')
    .pipe(webpack({
      output: {
        filename: 'great2d.js'
      },
      module: {
        loaders: [{
          test: /\.js$/, loader: 'babel', exclude: /node_modules/
        }]
      }
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('examples'))
})

gulp.task('clean', () => del(['dist', 'examples/great2d.min.js']))