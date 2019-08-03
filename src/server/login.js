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
        res.status(200).json({ token: extractToken(response.headers.authorization) });
      } else {
        console.log("Authorization failed for user " + req.body.email);
        res.status(response.statusCode).json({ errorMessage: "Authentication failed for user " + req.body.email });
      }
    }
  );
});

function extractToken(authorizationHeader) {
  if (authorizationHeader !== undefined && authorizationHeader !== null) {
    return authorizationHeader.replace("Bearer ", "");
  }
  return null;
}

module.exports = router;
