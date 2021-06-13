// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your name? (required)",
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log("Please enter your name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectName",
        message: "What is your project's name? (required)",
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "projectDesc",
        message: "Please give a brief description of your project. (required)",
        validate: projectDescInput => {
            if (projectDescInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmScreenshot",
        message: "Would you like to add a screenshot showing your app in action?",
        default: true   
    },
    {
        type: "input",
        name: "mainScreenshot",
        message: "Please provide a file path for a screenshot of your project in action.",
        when: ({ confirmScreenshot }) => {
            if (confirmScreenshot) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
