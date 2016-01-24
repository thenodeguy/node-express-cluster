'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200);
  res.set('Cache-Control', 'private, max-age=0, no-cache');
  res.send('process ' + process.pid + ' is handling this request.');
});

module.exports = router;
