const mysql = require("mysql");
const databaseConfig = require("./db.config.js");

const connection = mysql.createConnection(databaseConfig);

//used to test if server is connected to database
const testDbConnect = (callback) => {
  connection.query("SELECT animal FROM zodiac", (err, results) => {
    if (err) {
      console.log("Error in testDbConnect", err);
      callback(err, null);
    } else {
      console.log("Success from testDbConnect");
      callback(null, results);
    }
  });
};

//Make sure id is an integer
const getZodiacAnimal = (year, callback) => {
  connection.query(
    `SELECT animal FROM zodiac WHERE id = ${year}`,
    (err, results) => {
      if (err) {
        console.log("Query error in getting zodiac by year", err);
        callback(err, null);
      } else {
        console.log("Success query for zodiac");
        callback(null, results);
      }
    }
  );
};

//query for zodiac couple score
const getCoupleScore = (couple, callback) => {
  connection.query(
    `SELECT score FROM couple_score WHERE couple = '${couple}'`,
    (err, results) => {
      if (err) {
        console.log("Query error in getting couple score", err);
        callback(err, null);
      } else {
        console.log("Success query for couple score");
        callback(null, results);
      }
    }
  );
};

//query for star couple score
const getStarCoupleScore = (couple, callback) => {
  connection.query(
    `SELECT star_score FROM star_couple_score WHERE star_couple = '${couple}'`,
    (err, results) => {
      if (err) {
        console.log("Query error in getting star score", err);
        callback(err, null);
      } else {
        console.log("Success query for star score");
        callback(null, results);
      }
    }
  );
};

module.exports = {
  testDbConnect,
  getZodiacAnimal,
  getCoupleScore,
  getStarCoupleScore
};
