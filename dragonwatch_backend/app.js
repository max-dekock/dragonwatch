var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const analystsRouter = require('./routes/analysts');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// api routes
app.use('/api/analysts', analystsRouter);

// frontend
app.use(express.static(path.join(__dirname, 'frontend')));
app.get(/^\/(?!api).*$/, (req, res) => {  // catch non-api paths to make client-side routing work
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
