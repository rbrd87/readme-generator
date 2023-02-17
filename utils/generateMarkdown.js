// function to generate a license badge based on the users input
// if user selects 'None' no badge will be generated
function getLicenseBadge(license) {
  if (license != "None") {
    console.log(license);
    return `![${license} badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green&style=flat-square)`;
  } else {
    return "";
  }
};

function setLicenseText(license) {
  if (license != "None") {
    return `This project is covered by ${license}`;
  } else {
    return "No license used for this project";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [${license}](#${license})
  
## Description
${data.description}

## Installation
${data.installation}
  
## Usage 
${data.usage}
  
## Contributing
${data.contributing}
  
## Tests
${data.tests}
  
## Questions

## License 
${data.license}
${setLicenseText(data.license)}
`;
}

module.exports = generateMarkdown;
