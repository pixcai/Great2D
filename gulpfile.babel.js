const gulp = require('gulp')
const webpack = require('webpack-stream')
const del = require('del')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

gulp.task('build', () => {
  gulp
    .src('src/Great2D.js')
    .pipe(webpack({
      output: {
        filename: 'Great2D.js'
      },
      module: {
        loaders: [{
          test: /\.js$/, loader: 'babel', exclude: /node_modules/
        }]
      }
    }))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('Great2D.min.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('examples'))
})

gulp.task('clean', () => del(['dist', 'examples/index.js']))