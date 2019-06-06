const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (error, db) => {
  if (error) throw error;
  const dbo = db.db('mydb');
  // eslint-disable-next-line no-unused-vars
  dbo.createCollection('customers', (error2, result) => {
    if (error2) throw error2;
    console.log('Collection Created');
    db.close();
  });
});
