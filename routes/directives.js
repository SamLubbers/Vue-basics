var express = require('express');
var router = express.Router();

router.get('/dynamic-link', (req, res) => {
  res.render('directives/dynamic-link');
});

router.get('/events', (req, res) => {
  res.render('directives/events');
});

module.exports = router;
