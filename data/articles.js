const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = process.env.DB_URL;

 
// Database Name
const dbName = 'wiki';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});