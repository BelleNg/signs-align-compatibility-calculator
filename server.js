const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + '/public'))
 
app.get('/', (req, res) => {
 res.send({working: true})
})

app.listen(PORT, function () {
    console.log('Server listening on port:',PORT);
  })