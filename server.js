'use strict';

const inquirer = require('inquirer')
const prompts = require('./prompts')
const db = require('./db/index')
const connection = require('./db/dbconnect');
require('console.table')

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

mainPrompt();

async function viewAllEmployees() {

    const employees = await db.viewAllEmployees()

    console.log('\n')

    console.table(employees)

   mainPrompt()
};

async function viewEmployeesByDepartment() {

    const employeesByDept = await db.viewEmployeesByDepartment()

    console.log('\n')

    console.table(employeesByDept)

   mainPrompt()
};

async function viewDepartments() {

    const departments = await db.viewDepartments()

    console.log('\n')

    console.table(departments)

   mainPrompt()
};

async function removeEmployeePrompt(){

    inquirer.prompt(prompts[1]).then(function(response){

        let employee = response.fired
        let employeeString = employee.toString();
        let index = employeeString.indexOf(' ')

        let deleteID = parseInt((employeeString.slice(0,index)))

        removeEmployee()
        async function removeEmployee(){
        let fired = await db.removeEmployee(deleteID)

        }

        mainPrompt();

    })

    
    
}

function mainPrompt() {

inquirer.prompt(prompts[0]).then(function(response){

    let option = response.options

    if (option == "View All Employees"){

       viewAllEmployees();

    }

    else if (option == "View All Employees by Department"){

        viewEmployeesByDepartment();

    }

    else if (option == "Add an Employee"){
        
        addEmployeePrompts()

    }

    else if (option == "Remove an Employee"){

        removeEmployeePrompt();

    }

    else if (option == "Update Employee Role"){

        updateEmployeePrompt();

    }

    else if (option == "View Departments"){

        viewDepartments();

    }

    else if (option == "Add a Department"){

        newDepartmentPrompt();

    }

    else if (option == "Add a role"){

        newRolePrompt()

    } else {

        connection.end();

    }

})


}

function addEmployeePrompts(){

    inquirer.prompt(prompts[5]).then(function(response){

    let firstName = response.first
    let lastName = response.last
    let title = response.title;
    let arr = []

    async function roleID(){

        let getRoleID = await db.viewTitles()

        
        for (var i = 0; i < getRoleID.length; i++){

            if (title == getRoleID[i].title){

            let roleNumber = getRoleID[i].id


            arr.push(roleNumber);
            
            }
                
            } 
     
        
        }

        async function departmentID(){

            let getDepartmentID = await db.viewTitles()
            for (var i = 0; i < getDepartmentID.length; i++){
    
                if (title == getDepartmentID[i].title){
    
                let deptNumber = getDepartmentID[i].departmentID
                
                 arr.push(deptNumber)

                async function addEmployee(){
                    await db.addEmployee(firstName, lastName, arr[0], arr[1])
                  }

                  addEmployee()

                  mainPrompt();
            
            }
            
          
        }

        

    }

    roleID()
    departmentID()


}


)}

function updateEmployeePrompt(){
    inquirer.prompt(prompts[2]).then(function(response){

        let employee = response.updated
        let employeeString = employee.toString();
        let index = employeeString.indexOf(' ')
        let arr = [];

        let updateID = parseInt((employeeString.slice(0,index)))

    inquirer.prompt(prompts[3]).then(function(response){

        let newTitle = response.newtitle
        roleID()
        async function roleID(){

            let getRoleID = await db.viewTitles()
    
            
            for (var i = 0; i < getRoleID.length; i++){
    
                if (newTitle == getRoleID[i].title){
    
                let roleNumber = getRoleID[i].id
    
    
                arr.push(roleNumber);
                
                }
                    
                } 
         
            
            }
            departmentID()
            async function departmentID(){
    
                let getDepartmentID = await db.viewTitles()
                for (var i = 0; i < getDepartmentID.length; i++){
        
                    if (newTitle == getDepartmentID[i].title){
        
                    let deptNumber = getDepartmentID[i].departmentID
                    
                     arr.push(deptNumber)
    
                    async function updateEmployee(){
                        await db.updateEmployee(arr[0],arr[1],updateID)
                      }
    
                      updateEmployee()
    
                      mainPrompt();
                
                }
                
              
            }
    
            
    
        }

        

    })





    })

}

function newDepartmentPrompt() {
    inquirer.prompt(prompts[4]).then(function(response){
        let department = response.newdep

        async function addDepartment(){
         await db.addDepartment(department)
        }

        addDepartment()

        mainPrompt()



    })
}

function newRolePrompt() {

    inquirer.prompt(prompts[6]).then(function(response){
        let addedRole = response.newrole
        let receivingDept = response.deptadd
        let salary = response.salary
        let arr = [];

        departmentID()
            async function departmentID(){
    
                let getDepartmentID = await db.viewDepartmentsForNewRole()
                for (var i = 0; i < getDepartmentID.length; i++){
        
                    if (receivingDept == getDepartmentID[i].name){
        
                    let deptNumber = getDepartmentID[i].id
                    
                     arr.push(deptNumber)

                     async function addRole(){
                        await db.addRole(addedRole,salary,arr[0])
                      }
        
                      addRole();
                      mainPrompt();
    
                
                }
                
              
            }


    }

    })

}

