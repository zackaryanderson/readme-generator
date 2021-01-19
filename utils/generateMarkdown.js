const generateContributing = require('./generateContributing.js');

//create license badge
const renderLicenseBadge = (license) => {
  // return blank if not required
  if (!license) {
    return '';
  }
  //return badge if there is a license
  return `
  ![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)
  `;
}

//generate license text
const renderLicenseSection = (license, githubUsername) => {
  if (!license) {
    return '';
  }
  //return the corresponding license information
  else if (license === 'MIT') {
    return `
  ## License
  MIT License

  Copyright (c) ${new Date().getFullYear()} ${githubUsername}
    
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell    copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
    
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
    
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
    `;
  }
  else if (license === 'Unlicense') {
    return `
  ## License
  This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

    In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <https://unlicense.org>
    `;
  }
};

//function to generate the table of contents
const generateTableOfContents = (description, license, questions, installation, collaborators, confirmBadges,tests,usage) => {
  //establish blank block of code to be added to
  let table = ``;
  //go through list of all items and add them if they are required
  if (description) {
    table += `* [Description](#description)  \n`
  }
  if (installation) {
    table += `  * [Installation](#installation)  \n`
  }
  if (usage) {
    table += `  * [Usage](#usage)  \n`
  }
  if (questions) {
    table += `  * [Questions](#questions)  \n`
  }
  if (collaborators) {
    table += `  * [Credits](#credits)  \n`
  }
  if (confirmBadges) {
    table += `  * [Badges](#badges)  \n`
  }
  if (tests) {
    table += `  * [Tests](#tests)  \n`
  }
  if (license) {
    table += `  * [License](#license)  \n`
  }
  return table
};

//function to generate installation guidelines
const generateInstallation = (installation) => {
  if (!installation){
    return '';
  }
  //add installation instructions if the are declared
  return `
  ## Installation
    
  ### Follow these instructions to install the project
  - ${installation}
  `;
};

//function to generate usage section
const generateUsage = usage => {
  if (!usage){
    return '';
  }
  //add usage terms if they are specified
  return `
  ## Usage
    
  ### Follow these instructions to use the project
  - ${usage}
  `;
};

//TODO: create a function to generate the questions section
const generateQuestions = (questions, questionsDescription, githubUsername) => {
  if (!questions){
    return '';
  }
  //add questions block if it is specified
  return `
  ## Questions
    
  ### Contact me
  #### GitHub:
  - ${githubUsername}
  #### Email:
  - _${questions}_
  ### Instructions:
  -${questionsDescription}
  `;
};

//TODO: create a function to generate the credits section
const generateCredits = credits => {
  if (!credits){
    return '';
  }
  //add credits if chosen
  return `
  ## Credits
  ### Project Collaborators
  - ${credits}
  `;
};

//TODO: creata a function to generate the badges section
const generateBadges = (confirmBadges, githubUsername, githubRepo) => {
  if (!confirmBadges){
    return '';
  }
  //create badges if they are desired
  return `
  ## Badges

  ![GitHub last commit](https://img.shields.io/github/last-commit/${githubUsername}/${githubRepo})
  ![GitHub repo size](https://img.shields.io/github/repo-size/${githubUsername}/${githubRepo})
  ![GitHub issues](https://img.shields.io/github/issues/${githubUsername}/${githubRepo})
  ![GitHub top language](https://img.shields.io/github/languages/top/${githubUsername}/${githubRepo}) ![GitHub language count](https://img.shields.io/github/languages/count/${githubUsername}/${githubRepo})
  `;
};

//generate tests
const generateTests = tests => {
  if (!tests){
    return '';
  }
  //add tests if they are declared
  return `
  ## Tests
  - ${tests}
  `;
};

//function to generate markdown for README
function generateMarkdown(templateData) {
  //destructure template data from questions
  const { title, description, githubRepo, githubUsername, license, questions, questionsDescription, installation, collaborators, confirmBadges, tests, usage, contributing } = templateData;

  //add all requested information to the readme if it is specified
  return `
  # ${title}

  ## Table of Contents

  ${generateTableOfContents(description, license, questions, installation, collaborators, confirmBadges,tests)}

  ## Description

  ${description}
  ${renderLicenseBadge(license)}

  ${generateInstallation(installation)}

  ${generateUsage(usage)}

  ${generateQuestions(questions, questionsDescription, githubUsername)}

  ${generateCredits(collaborators)}

  ${generateTests(tests)}

  ${generateBadges(confirmBadges, githubUsername, githubRepo)}

  ${renderLicenseSection(license,githubUsername)}

  ${generateContributing(contributing)}

  ### _MADE WITH README GENERATOR_
  ![Developer Tag](https://img.shields.io/badge/Developed%20By%3A-Zack%20Anderson-orange)
  ![GitHub followers](https://img.shields.io/github/followers/zackaryanderson?style=social)
        
`;
}

//export file to be used elsewhere
module.exports = generateMarkdown;

