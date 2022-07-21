
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  !license ?  ``: `* [License](#license)`;
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink= license =>{
  !license ?  ``: `- [License](#license)`; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  !license ?  ``: `## License ${license}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  
  # ${data.title}    

  ## Description
    ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage) <br />
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Github](#github)
  - [Questions](#questions)

## Installation
:floppy_disk: ${data.install}

## Usage
:computer: ${data.usage}

${renderLicenseSection(data.license)} <br />
![badge](https://img.shields.io/badge/license-${renderLicenseBadge(data.license)}-brightgreen)

## Contributing
${data.contributing}

## Tests
:pencil2: ${data.test}

## Github
:octocat: [${data.github}](https://github.com/${data.github})

## Questions
:grey_question: ${data.questions}

:e-mail: Email me with any questions: k@gmail.com <br /><br />

This was generated with ❤️ made by Kenneth E Asay Jr 🔥🌌🌳🦝
`;
}

module.exports = generateMarkdown;
