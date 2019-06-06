const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (error1, db) => {
  if (error1) throw error1;
  const dbo = db.db('mydb');
  const myObj = { name: 'Company Inc', address: 'Highway 37' };
  // eslint-disable-next-line no-unused-vars
  dbo.collection('customers').insertOne(myObj, (error2, result) => {
    if (error2) throw error2;
    console.log('1 document inserted');
    db.close();
  });
});
