// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No license'){
    return '';
  }
  else if (license === 'MIT'){
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  }
  else if (license === 'Mozilla'){
    return '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  }
  else if (license === 'Apache'){
    return '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  }
  else if (license === 'General Public License'){
    return '![General Public License](https://img.shields.io/badge/License-GPL_3.0-yellowgreen.svg)';
  }
  else if (license === 'Creative Common Zero'){
    return '![Creative Commons Zero](https://img.shields.io/badge/license-CC0_1.0-lightgrey.svg)';
  }
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license ==='No license') {
    return '';
  }
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (license === 'No license') {
    return '';
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${renderLicenseBadge(data.badges)}

  # ${data.project_title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Features](#features)
  - [Contributing](#contributing)

  ## Installation
  ${data.installation}

  ${renderLicenseSection(data.badges)}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.badges)}
`;
}

export default generateMarkdown;
