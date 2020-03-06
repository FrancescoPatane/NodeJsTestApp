const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./application/routes'));


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
