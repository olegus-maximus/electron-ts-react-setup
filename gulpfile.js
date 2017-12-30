const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const tslint = require('gulp-tslint');

const colors = require('ansi-colors');

const log = require('fancy-log');

const exec = require('child_process').exec;

const argv = require('yargs')
  .option('travis', {
    alias: 't',
    default: false
  })
  .argv

gulp.task('build', () => 
  tsProject.src()
    .pipe(tsProject())
    .on('error', () => { process.exit(1) })
    .js.pipe(gulp.dest('dist'))
);

gulp.task('tslint', () =>
  tsProject.src()
    .pipe(tslint({
    // write a custom formatter for this, so that I can make it as prose-like yellow warnings
      formatter: 'stylish'
    }))
    .pipe(tslint.report({
      allowWarnings: true,
      emitError: argv.travis,
      fix: false,
      summarizeFailureOutput: true
    }))
);


gulp.task('default', ['tslint', 'build']);

gulp.task('start', ['tslint', 'build'], (callback) =>
  exec('npm start', (err, stdout, stderr) => {
    if (stderr) {
      callback('Electron start failure')
      log.error(colors.red(stderr));
      process.exit(1);
    }
  })
);