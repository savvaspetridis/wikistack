var express = require('express');
var swig = require('swig');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var add_routes = require('./routes/add');
var users = require('./routes/users');

var app = express();


// HERE

app.engine('html', swig.renderFile);
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
/*swig.renderFile('/Users/Savvas_Petridis/fullstack/wikistack/views/index.html', {
    title: 'turd bird squirb?????'
});*/

/*app.get('/', function (req, res) {
  res.render('index', { title: 'Browse My Wikistack'});
});

app.get('/Add_Page', function (req, res) {
    res.render('add_page', { title: 'Add a page!!!'});
});*/

// TO HERE

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/add', add_routes);
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    swig.setDefaults({ cache: false });
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/*app.get('/index/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})*/

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
