var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('juego', { title: 'El Juego de las bolas' });
});

module.exports = router;
