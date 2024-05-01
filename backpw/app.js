var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { PrismaClient } = require('@prisma/client');
var indexRouter = require('./routes/index');
const canchasRoutes = require('./routes/canchas');
const reservasRoutes = require('./routes/reservas');
const usuariosRoutes = require('./routes/usuarios');

var app = express();
const prima = new PrismaClient();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/canchas', canchasRoutes);
app.use('/reservas', reservasRoutes);
app.use('/usuarios', usuariosRoutes);

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

var server = app.listen(app.get('port'), function() {
  console.log('Servidor Express escuchando en el puerto ' + server.address().port);
})

module.exports = app;
