const generateTitle = titleText => {
    return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    `;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
    return `
    ${generateTitle(data.title)}
    
    ## Description
      ${data.description}
    ## Table of Contents
      ${data.contents}
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
  💾 ${data.install}
  
  ## Usage
  💻 ${data.usage}
  
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Github
  :octocat: ${data.github}
  
  ## Tests
  ✏️ ${data.test}
  
  ## Questions
  ✋ ${data.questions}
  
  [email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white) Email me with any questions: @gmail.com<br /><br />
  
  This was generated with ❤️ made by Kenneth E Asay Jr 🔥🌌🌳🦝
  `;
  }

  