const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (input) => {
            if (!input) {
                return 'Please enter a project name'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
        validate: (input) => {
            if (!input) {
                return 'Please enter a description of your project'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        message: 'Please add some installation instructions for your project',
        name: 'installation',
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'Please add usage intructions and/or examples for your project',
        name: 'usage',
        default: 'N/A'
    },
    {
        type: 'list',
        message: 'Please enter a license for your project',
        name: 'license',
        choices: [
            'GNU Affero General Public License v3.0',
            'Apache license 2.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'MIT',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'None'
        ]
    },
    {
        type: 'input',
        message: 'Please provide information for any contributors used for this project',
        name: 'contributing',
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'Please provide testing information for this project if required',
        name: 'tests',
        default: 'N/A'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'github',
        validate: (input) => {
            if (!input) {
                return 'Please enter your GitHub username'
            } else {
                return true
            };
        }
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
        validate: (input) => {
            if (!input) {
                return 'Please enter your email address'
            } else {
                return true
            };
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
        (error ? console.log(error) : console.log('Success!'))
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        //console.log(answers);
        writeToFile('new-readme.md', answers);
    });
}

// function call to initialize program
init();
