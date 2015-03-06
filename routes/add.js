var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('add_page');
});

router.get('/', function(req, res) {
  // this is the /add/ route
});

router.get('/add', function(req, res) {
    res.render('add_page');
  });

/*router.post('/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here
  var title;
  var body; 
  var url_name; 

  var generateUrlName = function(name) {
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};

  url_name = generateUrlName; 


  console.log(title);
  console.log('POOOOP');

  var p = new models.Page({ "title": title, "body":body, "url_name":url_name });
  p.save();
  res.redirect('/');
});*/


module.exports = router;
