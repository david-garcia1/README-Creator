// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'project_title',
    message: 'Name your project',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description',
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use',
},
{
    type: 'input',
    name: 'credits',
    message: 'List your collaborators',
},
{
    type: 'list',
    name: 'badges',
    message: 'Choose a license for your Github project.',
    choices: ['No license', 'MIT', 'Mozilla', 'Apache', 'General Public License', 'Creative Common Zero'],
},
{
    type: 'input',
    name: 'features',
    message: 'What kind of features does your project list?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Enter a way for people to contribute to your project',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
  if (err) {
    console.error('Error creating file', err);
  } else {
    console.log('README file created successfully!')
  }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error('Something else went wrong', error);
    }
  });
}

// Function call to initialize app
init();
