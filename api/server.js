const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

// "proxy": {
//   "/decimalOddsLessThanTwo": {
//     "target": "http://localhost:4000"
//   },
//   "/decimalOddsMoreThanTwo": {
//     "target": "http://localhost:4000"
//   }
// },

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

// function getDecimalOdds(operator) {
//   const b = bets.map(bet => bet.odds.some(odd => odd.oddsDecimal>2) && bet).filter(Boolean);
//   const r = bets.reduce((acc, bet) => {
//     console.log('acc', acc);
//     console.log('bet', bet);
//     const k = bet.odds.filter(odd =>
//       odd.oddsDecimal > 2
//      )
//      console.log(' yo oy',k);
//     return k && acc.push(bet);
//   }, []);

//     if(operator) {
//       return r
//     }

// }
// getDecimalOdds(true);
//  console.log('heloo',getDecimalOdds(true));

app.use(cors());

app.get("/decimalOddsMoreThanTwo", (req, res) => {
  // code here
  const s = bets
    .map(bet => bet.odds.some(odd => odd.oddsDecimal > 2) && bet)
    .filter(Boolean);
  res.send(s);
});

app.get("/decimalOddsLessThanTwo", (req, res) => {
  // code here
  const m = bets
    .map(bet => bet.odds.some(odd => odd.oddsDecimal < 2) && bet)
    .filter(Boolean);

  res.send(m);
});

app.listen(4000, () => {
  console.log("Example app listening on port 4000!");
});
