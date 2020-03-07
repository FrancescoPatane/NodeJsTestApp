const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'test'
const client = new MongoClient(url)


const findAll = function() {
  return MongoClient.connect(url).then(function(dbClient) {
    const db = dbClient.db(dbName)
    return db.collection('employees').find({}).toArray().then(function(result) {
      return result
    });
  }, function(err) {
    console.log(err)
  });
}

const findById = function(id) {
  return MongoClient.connect(url).then(function(dbClient) {
    const db = dbClient.db(dbName)
    return db.collection('employees').find({id:id}).toArray().then(function(result) {
      return result
    })
  }, function(err) {
    console.log(err)
  })
}


module.exports = {
  findAll: findAll,
  findById:findById
};
