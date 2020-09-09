const express = require('express');
const path = require('path');
 
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(PORT);
 
app.get('/', (req, res) => {
 res.send({working: true})
})
