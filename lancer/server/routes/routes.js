//server/routes/routes.js
var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
  res.render('../../src/index.html');
});
module.exports = router;