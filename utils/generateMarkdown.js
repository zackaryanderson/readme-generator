const generateContributing = require('./generateContributing.js');

//create license badge
const renderLicenseBadge = (license) => {
  if (!license) {
    return '';
  }

  return `
  ![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)
  `;
}

//generate license text
const renderLicenseSection = (license, githubUsername) => {
  if (!license) {
    return '';
  }
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
const generateTableOfContents = (description, license, questions, installation, collaborators, confirmBadges,tests) => {

  let existingVariables = [description, license, questions, installation, collaborators, confirmBadges,tests];
  existingVariables = existingVariables.filter(Boolean);
  existingVariables.forEach(item => {
    // item[0].toUpperCase();
    return `* [${item}](#${item})`;
  });
  return existingVariables;
};

//function to generate installation guidelines
const generateInstallation = (installation) => {
  if (!installation){
    return '';
  }
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
  return `
  ## Badges

  ![GitHub last commit](https://img.shields.io/github/last-commit/${githubUsername}/${githubRepo})
  ![GitHub repo size](https://img.shields.io/github/repo-size/${githubUsername}/${githubRepo})
  ![GitHub issues](https://img.shields.io/github/issues/${githubUsername}/${githubRepo})
  ![GitHub top language](https://img.shields.io/github/languages/top/${githubUsername}/${githubRepo}) ![GitHub language count](https://img.shields.io/github/languages/count/${githubUsername}/${githubRepo})
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(templateData) {
  //destructure template data from questions
  // const { title, license, questions, installation, usage, credits, badges, contributing } = templateData;
  const { title, description, githubRepo, githubUsername, license, questions, questionsDescription, installation, collaborators, confirmBadges, tests, usage, contributing } = templateData;

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

  ${generateBadges(confirmBadges, githubUsername, githubRepo)}

  ${renderLicenseSection(license,githubUsername)}

  ${generateContributing(contributing)}

  ### _MADE WITH README GENERATOR_
  ![Developer Tag](https://img.shields.io/badge/Developed%20By%3A-Zack%20Anderson-orange)
  ![GitHub followers](https://img.shields.io/github/followers/zackaryanderson?style=social)
        
`;
}

module.exports = generateMarkdown;


//ask for title, description, installation(optional), usage (optional), credits(optional), software used, questions section, license, badges, features(optional), tests(optional)
// *(optional) represents that the user can elect to add these sections to their README by answering yes or no to a question prompt.
//generate a table of contents based on headers
//Pull data for license from web and display in readme and also display badge on top right for easy observation


//questions section questions: Username, email, instructions with how to reach out with other questions.

//general section questions: Section header (such as ...usage), information to include with it

//badges to include:
//last commit from activity
//commit activity from activity
//repo file count from size
//github followers badge inside questions section from social
//github issues from issue tracking
//github branch checks state from build
//github top language from analysis
//github language count from analysis

//license badge:
//https://img.shields.io/badge/license-{license-here}-brightgreen

//personal badge:
//https://img.shields.io/badge/Developed%20By%3A-Zack%20Anderson-orange