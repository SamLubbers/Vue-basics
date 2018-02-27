var express = require('express');
var router = express.Router();

router.get('/1', (req, res) => {
  res.render('exercises/1');
});

router.get('/2', (req, res) => {
  res.render('exercises/2');
});

router.get('/3', (req, res) => {
  res.render('exercises/3');
});

router.get('/4', (req, res) => {
  res.render('exercises/4');
});

router.get('/5', (req, res) => {
  res.render('exercises/5');
});
module.exports = router;
