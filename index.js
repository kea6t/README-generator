// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
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
        type: 'input',
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
        choices: ['Apache', 'GNU', 'MIT', 'None']
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
];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            // if there's an error, reject the promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((inquirerResponse) => {
            console.log('README.md successfully created');
            return generateMarkdown(inquirerResponse);
        })
        .then((pageReadMe) => {
            return writeToFile(pageReadMe);
        })
        .catch((err) => {
            console.log(err);
        });
};

// Function call to initialize app
init();
