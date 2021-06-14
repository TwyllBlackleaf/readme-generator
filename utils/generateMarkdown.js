// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Generate a Table of Contents based on which optional sections are included

const tableOfContents = data => {
    let installationLink = "";
    let contributingLink = "";
    let testingLink = "";
    if (data.installation) {
        installationLink = `- [Installation](#Installation)
    `;
    }
    if (data.contributing) {
        contributingLink = `- [Contributing](#Contributing)
    `;
    }
    if (data.testing) {
        testingLink = `- [Testing](#Testing)
    `;
    }

    return `
    - [Description](#Description) 
    ${installationLink}- [Usage](#Usage)
    - [License](#License) 
    ${contributingLink}${testingLink}- [Questions](#Questions)
    `;
}

// Installation instructions, if the user included them

// Screenshot for "how to use" section, if the user included one

// Contribution guidelines, if the user included them

// Testing section, if the user included one

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}
    ${tableOfContents(data)}
`;
}

module.exports = generateMarkdown;
