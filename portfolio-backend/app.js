var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var assetsRouter = require('./routes/assetsRouter')

var app = express();
app.use(cors({
  origin: '*'
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('./public'));
app.get('/assets/logo-3d', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/assets/logo-3d.glb'));
});

app.get('/assets/scan-me', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/assets/me-scan.glb'));
});

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './public/build', 'index.html'));
});

module.exports = app;
