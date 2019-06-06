const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

MongoClient.connect(url, { useNewUrlParser: true }, (error1, db) => {
  if (error1) throw error1;
  const dbo = db.db('mydb');
  const myobj = [
    { _id: 154, name: 'Chocolate Heaven' },
    { _id: 155, name: 'Tasty Lemon' },
    { _id: 156, name: 'Vanilla Dream' },
  ];
  dbo.collection('products').insertMany(myobj, (error2, result) => {
    if (error2) throw error2;
    console.log(result);
    db.close();
  });
});
