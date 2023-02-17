function getLicenseBadge(license) {
  //console.log(license)
  return `![${license} badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green&style=flat-square)`
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
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
`;
}

module.exports = generateMarkdown;
