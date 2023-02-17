// array of various colours that can be used for the license badged
const licenseColours = ['red', 'yellow', 'hotpink', 'green', 'blueviolet', 'orange', 'blue'];
// randomColour picker so the same colour isn't used all the time
const randomColour = licenseColours[Math.floor(Math.random() * licenseColours.length)];

// empty array to store some license name data 
let licenseArray = [];
let licenseName = '';


// function to generate a license badge based on the users input
// if user selects 'None' no badge will be generated
const getLicenseBadge = (license) => {
  // splitting the license by the '/' so that the shortname can be used for the badge
  licenseArray = license.split('/')
  licenseName = licenseArray[0]
  
  let licenseShortName = licenseArray[1].split(' ').join('')

  if (license != 'None') {
    //console.log(license);
    return `![${licenseName} badge](https://img.shields.io/static/v1?label=license&message=${licenseShortName}&color=${randomColour}&style=flat)`;
  } else {
    return '';
  }
};

// function to populate the license section based on the users input
// if the user selects 'None' then a message to state no license is being used is shown
const setLicenseText = (license) => {
  if (license != 'None') {
    return `This project is licensed under the terms of ${licenseName}`;
  } else {
    return 'No license used for this project';
  }
};

// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

${getLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
  
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
For any questions or further information please get in touch via GitHub or email

GitHub - [https://github.com/${data.github}](https://github.com/${data.github})

Email - [${data.email}](mailto:${data.email})

## License 
${setLicenseText(data.license)}`;
};

// exporting the functions to use in index.js
module.exports = generateMarkdown;
