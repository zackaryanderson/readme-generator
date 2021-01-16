const generateContributing = require('./generateContributing.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (!license){
    return '';
  }

  return `
  https://img.shields.io/badge/license-${license}-brightgreen
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => { 
  if (!license){
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => { 
  if (!license){
    return '';
  }
}

//TODO: create a function to generate the table of contents
//TODO: create a function to generate installation guidelines
//TODO: create a function to generate usage section
//TODO: create a function to generate the questions section
//TODO: create a function to generate the credits section
//TODO: creata a function to generate the badges section

// TODO: Create a function to generate markdown for README
function generateMarkdown(templateData) {
  //destructure template data from questions
  const { title, license, questions, headers, installation, usage, credits, badges, contributing } = templateData;

  return `
  # ${title}

  ## Description

  ${description}
  ${renderLicenseBadge(license)}

  ## Table of Contents

  ${generateTableOfContents(headers)}

  ${generateInstallation(installation)}

  ${generateUsage(usage)}

  ${renderLicenseSection(license)}

  ${renderLicenseLink(license)}

  ${generateQuestions(questions)}

  ${generateCredits(credits)}

  ${generateBadges(badges)}

  ${generateContributing(contributing)}

  ### MADE WITH README GENERATOR
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