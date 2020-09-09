const mysql = require('mysql');
const databaseConfig = require('./db.config.js');

const connection = mysql.createConnection(databaseConfig);

const testDbConnect = (callback) => {
  connection.query('SELECT animal FROM zodiac', (err, results) => {
    if (err) {
      console.log('Error in testDbConnect', err);
      callback(err, null);
    } else {
      console.log('Success from testDbConnect');
      callback(null, results);
    }
  });
};



module.exports = {
  testDbConnect,
};