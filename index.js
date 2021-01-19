// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project: (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubRepo',
            message: 'Enter the GitHub Repo: (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the GitHub Repo');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username: (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter your username');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project use? (Required)',
            choices: ['MIT','Unlicense']
        },
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Would you like to include a "Contact Me" section?',
            default: false
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your Email (Your GitHub username will also be displayed)',
            when: ({ confirmQuestions }) => {
                if (confirmQuestions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questionsDescription',
            message: 'Please explain how you prefer users to contact you:',
            when: ({ confirmQuestions }) => {
                if (confirmQuestions) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to include a description of how to install your project?',
            default: false
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the steps required to install your project:',
            when: ({ confirmInstallation }) => {
                if (confirmInstallation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include a description of how to use your project?',
            default: false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use:',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCollaborators',
            message: 'Would you like to include a list of collaborators?',
            default: false
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Provide collaborator(s) GitHub profile(s):',
            when: ({ confirmCollaborators}) => {
                if (confirmCollaborators) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to include badges?',
            default: true
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to include a list of tests?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide a list of detailed tests to perform:',
            when: ({ confirmTests}) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to include a guideline for contributing to your project?',
            default: false
        },
    ])
};


const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/README.md',fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README.md Created.'
            });
        });
    });
};

promptUser()
.then(answers => generateMarkdown(answers))
.then(markdown => writeFile(markdown))
.then(writeFileResponse => {
    console.log(writeFileResponse.message)
}).catch(err => {
    console.log(err);
});
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
