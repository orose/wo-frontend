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

router.get("/:id", function(req, res) {
  const options = {
    url: "http://localhost:8080/api/workorder/" + req.params.id,
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

router.put("/:id", function(req, res) {
  const options = {
    url: "http://localhost:8080/api/workorder/" + req.params.id,
    headers: {
      Authorization: req.header("Authorization"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  };
  request.put(options, (error, response, body) => {
    if (response.statusCode < 400) {
      let data = JSON.parse(body);
      res.json(data);
    } else {
      console.log("error", error);
      res.status(response.statusCode).json({ errorMessage: "Update failed for workorder " + req.body });
    }
  });
});

module.exports = router;
