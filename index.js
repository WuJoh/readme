// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: "repo",
        message: "what is the link of your repository"
    },
    {
        type: 'input',
        name: "title",
        message: "What is your Project Title?",
    },
    {
        type: 'input',
        name: "description",
        message: "What is your Project Description?",
    },
    {
        type: 'input',
        name: "installation",
        message: "What are the steps require to install your project?",
    },
    {
        type: 'input',
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: 'input',
        name: "credits",
        message: "Provide a list of collaborators with links to Github.",
    },
    {
        type: 'input',
        name: "license",
        message: "What are the licenses for your project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete!');
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./README.md", generateMarkdown(data));
    })
}
// Function call to initialize app
init();