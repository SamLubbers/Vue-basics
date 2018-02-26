var express = require('express');
var router = express.Router();

router.get('/1', (req, res) => {
  res.render('exercises/1');
});

module.exports = router;
