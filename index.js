// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

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
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your project."
    },
    {
        type: "confirm",
        name: "confirmInstallImage",
        message: "Would you like to include an image showing how to install your project?",
        default: false,
        when: ({ installation }) => {
            if (installation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installImage",
        message: "Please provide a file path for an image showing how to install your project.",
        when: ({ confirmInstallImage }) => {
            if (confirmInstallImage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use your project. (required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide usage instructions!");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmUsageImage",
        message: "Would you like to include an image showing how to use your project?",
        default: false
    },
    {
        type: "input",
        name: "usageImage",
        message: "Please provide a file path for an image showing how to use your project.",
        when: ({ confirmUsageImage }) => {
            if (confirmUsageImage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe the guidelines for contributing to your project."
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide any tests you have created for your project."
    },
    {
        type: "list",
        name: "license",
        message: "Which license is your project licensed under?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./dist/README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
