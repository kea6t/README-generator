// TODO: Include packages needed for this application
const { writeFile } = require('./utils/generateMarkdown.j');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = [];

const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'contents',
                message: 'Table of contents (Required)',
                validate: contentsInput => {
                    if (contentsInput) {
                        return true;
                    } else {
                        console.log('Please provide a list of contents!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'install',
                message: 'Describe the installation of a project(Required)',
                validate: installInput => {
                    if (installInput) {
                        return true;
                    } else {
                        console.log('Please provide a description of the installation!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Describe the usage of a project(Required)',
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('Please provide a description usage!');
                        return false;
                    } 
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What license did you use for this project? (Check all that apply)',
                choices: ['Apache', 'GNU', 'MIT']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Who contributed to this project?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: githubInput => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                  }
                }
              },
            {
                type: 'input',
                name: 'test',
                message: 'Are there tests performed?'
            },
            {
                type: 'input',
                name: 'questions',
                message: 'To be or not to be, that is the question?'
            }
        ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
