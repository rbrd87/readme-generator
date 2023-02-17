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
    }
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
