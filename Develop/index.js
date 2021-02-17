// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
