var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home Page',
                      message: 'Welcome to the Home Page',
                      });
});

/* GET Contact us Page */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'ContactUs',
                            message: 'Welcome to the Contact Us Page'});
});
/* GET support Page */
router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support',
                          message: 'Welcome to the Support Page'});  
});
module.exports = router;
