let createError = require('http-errors');
import * as express from "express";
import { Application, Request, Response, NextFunction } from 'express';
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let diary_routes = require('./routes/diary_routes');
let user_routes = require('./routes/user_routes');
let index_routes = require('./routes/index_routes');

const app: Application = express();

app.listen(8080, ()=>{
  console.log('server runnning')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

diary_routes(app)
user_routes(app)
index_routes(app)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.post('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
