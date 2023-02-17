// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License 
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions

`;
}

module.exports = generateMarkdown;
