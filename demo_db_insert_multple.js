const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'palette',
  database: 'mydb',
});

connection.connect((error1) => {
  if (error1) throw error1;
  console.log('Connected');
  const strQuery = 'INSERT into customers (name, address) VALUES ?';
  const values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633'],
  ];
  connection.query(strQuery, [values], (error2, result) => {
    if (error2) throw error2;
    console.log(`Number of rows inserted ${result.affectedRows}`);
  });
});
