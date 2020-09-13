"use strict";
const inquirer = require("inquirer");
const DB = require("./db/index")
const connection = require('./db/dbconnect');
const server = require('./server');
const db = require("./db/index");
require('console.table')


let prompts = [

    {
        type: "checkbox",
        message: "What would you like to do?",
        name: "options",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "Add an Employee",
            "Remove an Employee",
            "Update Employee Role",
            "View Departments",
            "Add a Department",
            "Add a role",
            "Quit"
        
        ]

    },

    {
        type: "checkbox",
        message: "Which employee will you delete?",
        name: "fired",
        choices: (async function() {
            let optionArray = [];
            const employees = await db.viewAllEmployees()
            for (var i=0; i < employees.length; i++){
                optionArray.push(employees[i].id +" "+"|"+" "+ employees[i].employee_first +" "+ employees[i].employee_last
                +" "+"|"+" "+"Salary: "+ employees[i].salary + " "+"|"+" " +"Department: " + employees[i].departments
                + " "+"|"+" "+"Position: " + employees[i].roles)
                
            }

            return optionArray;

        })
    },

    {
        type: "checkbox",
        message: "Which employee will you update?",
        name: "updated",
        choices: (async function() {
            let optionArray = [];
            const employees = await db.viewAllEmployees()
            for (var i=0; i < employees.length; i++){
                optionArray.push(employees[i].id +" "+"|"+" "+ employees[i].employee_first +" "+ employees[i].employee_last
                +" "+"|"+" "+"Salary: "+ employees[i].salary + " "+"|"+" " +"Department: " + employees[i].departments
                + " "+"|"+" "+"Position: " + employees[i].roles)
                
            }

            return optionArray;

        })
    },

    {
        type: "checkbox",
        message: "What will the employee's new job title be?",
        name: "newtitle",
        choices: (async function() {
           let optionArray = [];
           const titles = await db.viewTitles()

           for (var i=0; i < titles.length; i++){
               optionArray.push(titles[i].title)
           }
        
           return optionArray;

        })

    },

    {
        type: "text",
        message: "What the is the name of the new department?",
        name: "newdep",

    },

    


    [
    {
        type: "text",
        message: "What the new employee's first name?",
        name: "first",

    },

    {
        type: "text",
        message: "What the new employee's last name?",
        name: "last",

    },

    {
        type: "checkbox",
        message: "What will the new employee's job title be?",
        name: "title",
        choices: (async function() {
           let optionArray = [];
           const titles = await db.viewTitles()

           for (var i=0; i < titles.length; i++){
               optionArray.push(titles[i].title)
           }
        
           return optionArray;

        })

    }

    
    ],

    [

        {
            type: "text",
            message: "What the is the name of the new role?",
            name: "newrole",
    
        },
    
        {
            type: "checkbox",
            message: "What department will this new role be part of?",
            name: "deptadd",
            choices: (async function(){
                let optionArray = [];
                const departments = await db.viewDepartments()
                for (var i = 0; i < departments.length; i++){
                    optionArray.push(departments[i].name)
                }
    
                return optionArray;
    
            })
    
        },
    
        {
            type: "number",
            message: "What will the salary be for this role?",
            name: "salary"
        }
    
        ]

    


]

module.exports = prompts;





