const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'palette',
  database: 'classicmodels',
});

connection.connect((error1) => {
  if (error1) throw error1;
  console.log('Connected to Database');
  const strQuery = 'SELECT productName from products LIMIT 10';
  // eslint-disable-next-line no-unused-vars
  connection.query(strQuery, (error2, result, fields) => {
    if (error2) throw error2;
    console.log(result);
  });
});
