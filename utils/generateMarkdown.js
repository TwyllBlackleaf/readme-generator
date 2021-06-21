const addScreenshot = require("./add-screenshots.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    if (data.license) {
        if (data.license === "Other" && data.otherLicenseName) {
            return `[![License: ${data.otherLicenseName}](https://img.shields.io/badge/license-${data.otherLicenseName}-green)](${renderLicenseLink(data)})`;
        } else if (data.license != "None") {
            return `[![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-green)](${renderLicenseLink(data)})`;
        } else {
            return "";
        }
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
    let licenseLink = "";

    if (data.license) {
        if (data.license === "Other" && data.otherLicenseLink) {
            licenseLink = data.otherLicenseLink;
        } else if (data.license != "None") {
            switch (data.license) {
                case "GNU AGPLv3":
                    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
                    break;
                case "GNU GPLv3":
                    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
                    break;
                case "GNU LGPLv3":
                    licenseLink = "https://choosealicense.com/licenses/lgpl-3.0/";
                    break;
                case "Mozilla Public License 2.0":
                    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
                    break;
                case "Apache License 2.0":
                    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
                    break;
                case "MIT License":
                    licenseLink = "https://choosealicense.com/licenses/mit/";
                    break;
                case "Boost Software License 1.0":
                    licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
                    break;
                case "The Unlicense":
                    licenseLink = "https://choosealicense.com/licenses/unlicense/";
                    break;
            }
        } 
    }

    return licenseLink;
}

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
    if (data.license && data.license != "None") {
        licenseLink = `- [License](#License)
`;
    }

    // Formatting looks strange in order to maintain tabs and line breaks in finished markdown
    return `
- [Description](#Description) 
${installationLink}- [Usage](#Usage)
${contributingLink}${testingLink}- [Questions](#Questions)
${licenseLink}`;
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

// License section, if the user included one
const licenseSection = data => {
    if (data.license && data.license != "None") {
        if (data.license === "Other" && data.otherLicenseName) {
            return `
## License

This project is licensed under [${data.otherLicenseName}](${renderLicenseLink(data)})`;
        } else {
            return `
## License

This project is licensed under [${data.license}](${renderLicenseLink(data)})`;
        }
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}
${renderLicenseBadge(data)}

${tableOfContents(data)}

## Description
    
${data.projectDesc}

${installationSection(data)}

## Usage ${addUsageImage(data)}

${data.usage}

${contributingSection(data)}
${testingSection(data)}
${licenseSection(data)}
`;
}

module.exports = generateMarkdown;