// packages required for the application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// link to the generateMarkdown javascript file
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user to give project data to generate the readme file
const questions = [
    {
        // validation added to prevent blank entry
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
        // default value given so that the user doesn't give a blank entry
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
        // list of GitHub licenses for the user to choose from
        type: 'list',
        message: 'Please enter a license for your project',
        name: 'license',
        choices: [
            'GNU Affero General Public License v3.0 / agpl-3.0',
            'Apache license 2.0 / apache-2.0',
            'BSD 2-clause "Simplified" license / bsd-2-clause',
            'BSD 3-clause "New" or "Revised" license / bsd-3-clause',
            'Boost Software License 1.0 / bsl-1.0',
            'Creative Commons Zero v1.0 Universal / cc0-1.0',
            'Eclipse Public License 2.0 / epl-2.0',
            'GNU General Public License v2.0 / gpl-2.0',
            'GNU General Public License v3.0 / gpl-3.0',
            'GNU Lesser General Public License v2.1 / lgpl-2.1',
            'MIT License / mit',
            'Mozilla Public License 2.0 / mpl-2.0',
            'The Unlicense / unlicense',
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
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
        (error ? console.log(error) : console.log(`${data.title}-README.md file has been written`))
    );
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        //console.log(answers);

        // using path.join I can specify that the readme is saved in the correct folder
        writeToFile(path.join ('./readme-files/', `${answers.title}-README.md`), answers);
    });
}

// function call to initialize program
init();