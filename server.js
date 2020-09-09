const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./database/queries.js');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'))
 
app.get('/hi', (req, res) => {
 res.send({working: true})
})

app.get('/testBackendConnection', (req, res) => {
    db.testDbConnect((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  });

app.listen(PORT, function () {
    console.log('Server listening on port:',PORT);
  })