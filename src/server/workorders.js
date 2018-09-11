var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  let data = [
    {
      id: 0,
      customer_id: 1,
      title: 'First workorder',
    },
    {
      id: 1,
      customer_id: 0,
      title: 'Second workorder',
    },
  ];
  setTimeout(function() {
    res.json(data);
  }, 1000);
});

module.exports = router;
