const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./database/queries.js");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/hi", (req, res) => {
  res.send({ working: true });
});

app.get("/testBackendConnection", (req, res) => {
  db.testDbConnect((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get("/api/zodiac/:year", (req, res) => {
  let yearNum = parseInt(req.params.year);
  db.getZodiacAnimal(yearNum, (err, results) => {
    if (err) {
      console.log("Error in price route");
      res.sendStatus(400);
    } else {
      if (results.length === 0) {
        console.log("year not in database");
        res.send({ animal: 'mantis shrimp' });
      }
      console.log("Successful price query");
      res.status(200).send(results[0]);
    }
  });
});

app.get("/api/score/:couple", (req, res) => {
    let couple = req.params.couple;
    db.getCoupleScore(couple, (err, results) => {
      if (err) {
        console.log("Error in score route");
        res.sendStatus(400);
      } else {
        if (results.length === 0) {
          console.log("year not in database");
          res.send({ score: 120 });
        }
        console.log("Successful score query");
        res.status(200).send(results[0]);
      }
    });
  });

app.listen(PORT, function () {
  console.log("Server listening on port:", PORT);
});
