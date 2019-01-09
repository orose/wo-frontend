var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res) {
  request.get(
    'http://localhost:8081/api/workorders',
    (error, response, body) => {
      let data = JSON.parse(body);
      res.json(data._embedded.workorders);
    },
  );
});

module.exports = router;
