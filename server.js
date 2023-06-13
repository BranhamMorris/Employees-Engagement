const inquirer = requirer('inquirer');
const mysql = require('mysql');
const table = require('console.table');

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3001

})

function initializeApp() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'pick one',
            choose: ['view  by manager', 'view employees by department']
        }
    ])
    .then(selection => {
     switch (selection.choices)  {
        case 'view employees by manager':
            fetch('http://localhost:3001/api/employees-manager')
            .then(response => {
                if (!response.ok) {
                    return console.log('error');
                }
                return response.json();
            })
            .then(employeeData => {
                console.table(employeeData.data);
            })
            .then(initializeApp);
            break;

            case 'view employees by department':
                fetch('http://localhost:3001/api/employees-department')
                .then(response => {
                    if (!response.ok) {
                        return console.log('error');
                    }
                    return response.json();
                })
                .then(employeeData => {
                    console.table(employeeData.data);
                })
                .then(initializeApp);
                break;
     } 
    })
}


module.exports = {initalizeApp};