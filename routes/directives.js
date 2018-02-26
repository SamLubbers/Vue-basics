var express = require('express');
var router = express.Router();

router.get('/dynamic-link', (req, res) => {
  res.render('directives/dynamic-link');
});

router.get('/counter', (req, res) => {
  res.render('directives/counter');
});

module.exports = router;
