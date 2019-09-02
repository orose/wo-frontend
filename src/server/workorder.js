var express = require("express");
var request = require("request");
var router = express.Router();

router.get("/", function(req, res) {
  const options = {
    url: "http://localhost:8080/api/workorder",
    headers: {
      Authorization: req.header("Authorization")
    }
  };
  request.get(options, (error, response, body) => {
    if (response.statusCode < 400) {
      let data = JSON.parse(body);
      res.json(data);
    } else {
      console.log(error);
    }
  });
});

module.exports = router;
