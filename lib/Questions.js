const inquirer = require('inquirer');

function Questions() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team managers name?",
            validate:function(input) {
               if (input) {
                   return true;
               } else {
                   console.log("Please enter a team manager's name")
                   return false;
               }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team managers employee id?",
            validate: function(input) {
                if (parseInt(input)) {
                    return true;
                } else {
                    console.log("Please enter a number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email',
            validate: function(input) {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter an email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?', 
            validate: function(input) {
                if (parseInt(input)) {
                    return true;
                } else {
                    console.log("Please enter a valid office number");
                    return false;
                }
            }
        }
    ])
    .then(employeeInfo => {
        console.log(employeeInfo);
        return employeeInfo;
    })
}

module.exports = Questions;
Questions();