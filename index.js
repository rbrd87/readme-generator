const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please add some installation instructions for your project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please add usage intructions and/or examples for your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter a license for your project',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide information for any contributors used for this project',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide testing information for this project if required',
        name: 'tests'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) =>
        (error ? console.log(error) : console.log("Success!"))
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        //console.log(answers);
        writeToFile("new-readme.md", answers);
    });
}

// function call to initialize program
init();
