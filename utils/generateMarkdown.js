// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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