var express = require("express");
var request = require("request");
var router = express.Router();

router.post("/", function(req, res) {
  request.post(
    {
      headers: { "content-type": "application/json" },
      url: "http://localhost:8080/login",
      body: JSON.stringify(req.body)
    },
    function(error, response, body) {
      if (response.statusCode === 200) {
        console.log("Authorization succeeded for user " + req.body.email);
        console.log(response.headers.authorization);
      } else if (response.statusCode === 403) {
        console.log("Authorization failed for user " + req.body.email);
      }
      res.sendStatus(response.statusCode);
    }
  );
  //request.post("http://localhost:8080/login", (error, response, body) => {
  //console.log("body: ", body);
  //let data = JSON.parse(body);
  //res.json(data._embedded.workorders);
  //});
});

module.exports = router;
