// Dependencies
import gulp from 'gulp';
import shell from 'gulp-shell';
import ts from 'gulp-typescript';
import nodemon from 'gulp-nodemon';
import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  env: process.env.NODE_ENV,
  serverConfig: {
    basePath: './src/backend',
    watchPath: ['src'],
    tsconfig: 'tsconfig.json',
    outputDir: 'build',
    watchFile: 'index.js'
  },
}

gulp.task('server:ts', (done) => {
  const { serverConfig } = CONFIG
  const tsProject = ts.createProject(`${serverConfig.basePath}/${serverConfig.tsconfig}`);
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest(`${serverConfig.basePath}/${serverConfig.outputDir}`))
    .on('error', (error) => done(error))
    .on('end', () => done());
});

gulp.task('server:watch', (done) => {
  const { serverConfig } = CONFIG
  const stream = nodemon({
    script: `${serverConfig.basePath}/${serverConfig.outputDir}/${serverConfig.watchFile}`,
    env: { NODE_ENV: CONFIG.env as string },
    ext: 'ts',
    watch: serverConfig.watchPath,
    tasks: ['server:ts'],
    stdout: true,
  });
  return stream.on('quit', function () {
    done();
  });
});

gulp.task('server:build:clean', shell.task('rm -rf ./src/backend/build'))
gulp.task('server:build', gulp.series('server:build:clean', 'server:ts'));
gulp.task('server:dev', gulp.series('server:build:clean', 'server:ts', 'server:watch'));
