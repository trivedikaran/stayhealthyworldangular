var express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  bodyParser = require('body-parser');

var sql = require('mssql'); // MS Sql Server client

var cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};


var app = express();
// app.use("port", 4300);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  'extended': 'false'
}));

app.use(cors(corsOptions));

var server = app.listen(4300, function () {

});


var config = {
  user: 'karan',
  password: 'karan1234',
  server: 'karandbinstance.czasqvf9b39w.us-east-2.rds.amazonaws.com',
  database: 'stayhealthyworld',
  options: {
    encrypt: false
  }
};

var sqlConnection = new sql.ConnectionPool(config);
sqlConnection.connect();

// sql.connect(sqlConfig);

app.get('/', function (req, res, next) {
  res.send("Hello");
});

app.get('/testData', function (req, res) {

  // var dbConn = new sql.ConnectionPool(config);
  //5.
  //6.
  var request = new sql.Request(sqlConnection);
  //7.

  request.input('UserId', sql.BigInt, null);
  request.execute('GetAllUser').then(function (data) {
    res.send(data);
  }).catch(function (err) {
    console.log(err);
  });


  // request.query("select * from tbUser").then(function (recordSet) {
  //   console.log(recordSet);
  //   res.send(recordSet);
  //   dbConn.close();
  // }).catch(function (err) {
  //   //8.
  //   console.log(err);
  //   dbConn.close();
  // });
});

// var request = new sql.Request();
// request.query('select * from tbUser', function (err, recordset) {
//   if (err) console.log(err);
//   res.end(JSON.stringify(recordset)); // Result in JSON format
// });

// app.get('/*', function (req, res, next) {
//   res.render('../index.html', {
//     title: 'Express'
//   });
// });




module.exports = app;
