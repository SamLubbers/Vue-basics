var express = require('express');
var router = express.Router();

router.get('/1', (req, res) => {
  res.render('exercises/1');
});

router.get('/2', (req, res) => {
  res.render('exercises/2');
});

module.exports = router;
