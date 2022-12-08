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
        name: 'main-options',
        message: 'Which option would you like?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'No action'
        ]
    }])
    .then((answers) => {
        const { choices } = answers; 
  
        if (choices === "View all departments") {
          viewDepartments();
        }
  
        if (choices === "View all roles") {
          viewRoles();
        }
  
        if (choices === "View all employees") {
          viewEmployees();
        }
  
        if (choices === "Add a department") {
          addDepartment();
        }
  
        if (choices === "Add a role") {
          addRole();
        }
  
        if (choices === "Add an employee") {
          addEmployee();
        }
  
        if (choices === "Update an employee role") {
          updateEmployeeRole();
        }
  
        if (choices === "Do nothing") {
          connection.end()
      };
    });
};

viewDepartments = () =>{
    console.log('All departments:');

    const sql = `SELECT role.id, role.title, department.name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err; 
        console.table(rows); 
        promptUser();
    })
};
viewRoles = () =>{
    
};
viewEmployees = () =>{
    
};
addDepartment = () =>{
    
};
addRole = () =>{
    
};
addEmployee = () =>{
    
};
updateEmployeeRole = () =>{
    
};