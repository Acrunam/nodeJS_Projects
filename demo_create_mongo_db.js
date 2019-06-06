const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
  if (error) throw error;
  console.log('Database Created!');
  db.close();
});
