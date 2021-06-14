const addScreenshot = require("./add-screenshots.js");

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

    // Formatting looks strange in order to maintain tabs and line breaks in finished markdown
    return `
- [Description](#Description) 
${installationLink}- [Usage](#Usage)
- [License](#License) 
${contributingLink}${testingLink}- [Questions](#Questions)
`;
}

// Installation instructions, if the user included them
const installationSection = data => {
    if (data.installation) {
        return `
## Installation
        
${data.installation}`
    } else {
        return "";
    }
}
// Screenshot for "how to use" section, if the user included one
const addUsageImage = data => {
    if (data.usageImage) {
        addScreenshot(data.usageImage, "how-to-use.png");

    return `

![A screenshot showing how to use the app]("./readme-assets/how-to-use.png")
`;
    } else {
        return "";
    }
    
};

// Contribution guidelines, if the user included them
const contributingSection = data => {
    if (data.contributing) {
        return `
## Contributing
        
${data.contributing}`
    } else {
        return "";
    }
}

// Testing section, if the user included one
const testingSection = data => {
    if (data.testing) {
        return `
## Testing
        
${data.testing}`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}

## Description
    
${data.projectDesc}

${tableOfContents(data)}
${installationSection(data)}

## Usage ${addUsageImage(data)}

${data.usage}

## License

${contributingSection(data)}
${testingSection(data)}
`;
}

module.exports = generateMarkdown;