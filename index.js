const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

 const distDir = path.resolve(__dirname, './dist');
 const distPath = path.join(distDir, 'team.html');

 const layout = require('./lib/Layout');

const employees = [];

//OG function to gather original employees

function createEmployee() {

    console.log("Let's create a team!");

    inquirer
        .prompt ([
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
        .then(managerResponse => {
            const manager =  new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.officeNumber)
            employees.push(manager);

            //Asking if they'd like to add an additional team member
            newMember()

            function newMember() {
                inquirer    
                    .prompt([
                        {
                            type: 'list',
                            name: 'employee',
                            message: 'Would you like to add a new team mate?',
                            choices: ['Engineer', 'Intern', 'No additional teammates']
                        }
                    ])
                    .then(teammateResponse => {
                        //If Engineer asks engineer questions
                        if (teammateResponse.employee === 'Engineer') {
                            engineerPrompt()

                            function engineerPrompt() {
                                inquirer
                                    .prompt([
                                        {
                                            type: 'input',
                                            name: 'name',
                                            message: "What is the engineers name?",
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
                                            message: "What is the engineers employee id?",
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
                                            message: 'What is the engineers email',
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
                                            name: 'github',
                                            message: 'What is the engineers github uername?',
                                            validate: function(input) {
                                                if (input) {
                                                    return true;
                                                } else {
                                                    console.log('Please enter a username');
                                                    return false;
                                                }
                                            }
                                        }
                                    ])
                                    .then(engineerResponse => {
                                        const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github)
                                        employees.push(engineer);
                                        newMember();
                                    })
                            }
                           
                        //If response is intern ask intern questions    
                        } else if (teammateResponse.employee === 'Intern') {
                            internPrompt()

                            function internPrompt() {
                                inquirer
                                    .prompt([
                                        {
                                            type: 'input',
                                            name: 'name',
                                            message: "What is the interns name?",
                                            validate:function(input) {
                                               if (input) {
                                                   return true;
                                               } else {
                                                   console.log("Please enter an interns name")
                                                   return false;
                                               }
                                            }
                                        },
                                        {
                                            type: 'input',
                                            name: 'id',
                                            message: "What is the interns employee id?",
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
                                            message: 'What is the interns email',
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
                                            name: 'school',
                                            message: 'What school did the intern go to?',
                                            validate: function(input) {
                                                if (input) {
                                                    return true;
                                                } else {
                                                    console.log('Please enter a school');
                                                    return false;
                                                }
                                            }
                                        }
                                    ])
                                    .then(internResponse => {
                                        const intern = new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school);
                                        employees.push(intern);
                                        newMember();
                                    })
                            }
                        } else {
                            //Exit Inquirer and write files here. 
                            console.log(employees);
                            const html = layout(employees)
                            fs.writeFile(distPath, html, err => {
                                if(err) throw new Error(err);
                            })

                            console.log("Your team has been created!");
                        }
                    })
            }
        })
};

createEmployee();