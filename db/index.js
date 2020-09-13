'use strict';
require('console.table')

const connection = require('./dbconnect');


class DB {
    constructor(connection){
    this.connection = connection
    }

    viewAllEmployees() {
        return this.connection.query(

        'SELECT employees.id, employee_first, employee_last, departments.name AS departments, roles.title AS roles, roles.salary AS salary FROM employees LEFT JOIN departments ON employees.departmentID = departments.id LEFT JOIN roles ON employees.roleID = roles.id'
    
        )

    }

    viewEmployeesByDepartment() {
        return this.connection.query(

            'SELECT name, employees.employee_first AS first, employees.employee_last AS last FROM departments RIGHT JOIN employees ON employees.departmentID = departments.id'
        )
    }

    viewTitles(){
        return this.connection.query(

            'SELECT * FROM roles'
        )
    }

    viewDepartments(){
        return this.connection.query(

            'SELECT name FROM departments'
        )
    }

    viewDepartmentsForNewRole(){
        return this.connection.query(

            'SELECT * FROM departments'
        )
    }


    addEmployee(first, last, role, departmentID) {

        return this.connection.query(

            'INSERT INTO employees SET ?',
        {
            employee_first: first,
            employee_last: last,
            roleID: role,
            departmentID: departmentID

        }

        )

    }

    removeEmployee(id) {
        return this.connection.query(

            'DELETE FROM employees WHERE id=?',
            [id]



        )
    }

    updateEmployee(role,department,id) {
        return this.connection.query(
            'UPDATE employees SET ? WHERE?',
            [

                {
                    roleID: role,
                    departmentID: department

                },
                {

                    id: id

                }


            ]
        )
    }

    addDepartment(name){
        return this.connection.query(
            'INSERT INTO departments SET?',
            {
                name: name
            }

        )
    }

    addRole(title, salary, departmentID){
        return this.connection.query(
            'INSERT INTO roles SET?',

            {
                title: title,
                salary: salary,
                departmentID: departmentID,
            }
        )
    }


}



module.exports = new DB(connection);