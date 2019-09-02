const express = require("express");
const bodyParser = require("body-parser");
const os = require("os");
const morgan = require("morgan");

const customers = require("./customers");
const workorder = require("./workorder");
const login = require("./login");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("dist"));

app.use("/api/customers", customers);
app.use("/api/login", login);
app.use("/api/workorder", workorder);
app.get("/api/getUsername", (req, res) => res.send({ username: os.userInfo().username }));

app.listen(8081, () => console.log("Listening on port 8081!"));
