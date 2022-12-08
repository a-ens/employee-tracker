// Importing npm packages
const mysql = require('mysql2')
const inquirer = require('inquirer'); 
const cTable = require('console.table');

require('dotenv').config()

const connection = mysql.startConnect({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
  });

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
  afterConnection();


})