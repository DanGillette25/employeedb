'use strict';

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dancodes',
  database: 'employees_db'
});

connection.connect()


connection.query = util.promisify(connection.query);


module.exports = connection;