const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const reqPath = path.join(__dirname, "./data/data.json");
const bets = JSON.parse(fs.readFileSync(reqPath, "utf8")).bets;

const getDecimal = cb =>
  bets
    .map(bet => bet.odds.some(odd => cb(odd.oddsDecimal, 2)) && bet)
    .filter(Boolean);

app.get("/decimalOddsMoreThanTwo", (req, res) => {
  res.send(getDecimal((value, limit) => value > limit));
});

app.get("/decimalOddsLessThanTwo", (req, res) => {
  res.send(getDecimal((value, limit) => value < limit));
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
