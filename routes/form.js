var express = require('express');
var router = express.Router();

/* GET form */
router.get('/', (req, res) => {
  res.render('form');
});

module.exports = router;
