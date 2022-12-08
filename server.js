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
});

afterConnection = () => {
    console.log('Welcome, Employee Manager!')

    promptUser();
};

const promptUser = () => {
    inquirer.prompt([
    {   type: 'list',
        name: 'options',
        message: 'Which option would you like?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'
        ]
    }])
    
}