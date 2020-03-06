const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);


const findAll = function() {


  return MongoClient.connect(url).then(function(dbClient) {
    const db = dbClient.db("test");
    return db.collection('employees').find({}).toArray().then(function(result) {
      return result;
    });
  });
}


module.exports = {findAll:findAll};
