const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'palette',
  database: 'mydb',
});

connection.connect((error1) => {
  if (error1) throw error1;
  const strQuery = 'SELECT * FROM customers LIMIT 5 OFFSET 2';
  connection.query(strQuery, (error2, result) => {
    if (error2) throw error2;
    console.log(result);
  });
});
