var express = require('express');
var router = express.Router();

router.get('/dynamic-link', (req, res) => {
  res.render('directives/dynamic-link');
});

router.get('/events', (req, res) => {
  res.render('directives/events');
});

router.get('/dynamic-styling', (req, res) => {
  res.render('directives/dynamic-styling');
});


router.get('/dynamic-table', (req, res) => {
  res.render('directives/dynamic-table');
});

module.exports = router;
