var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let data = [
    {
      id: 0,
      name: 'Rose Webutvikling',
    },
    {
      id: 1,
      name: 'Systek As',
    },
  ];
  setTimeout(function() {
    res.json(data);
  }, 1000);
});

module.exports = router;
