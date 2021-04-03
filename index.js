const inquirer = require('inquirer');
const fs = require('fs');

function returnReadme(responses) {
  const { name, install, usage, licence, contribute, test, question1, question2 } = responses
  return `
# ${name}
![${licence}](https://img.shields.io/badge/licence-${licence}-Green)

##Table of Contents\n
  1:Installation\n
  2:Usage\n
  3:Licence\n
  4:Contributing\n
  5:Tests\n
  6:Questions\n

## 1:Installation
${install}

## 2:Usage
${usage}

## 3:Contributing
${contribute} accepting contributions to my code at this time. If you have futher questions or 
would like to contact me see the questions section of the readme

## 4:Tests
${test}

## 5:Questions
If you have futher questions or would like to contribute, please contact me at one of the following\n
GitHub:\n
https://github.com/${question1} \n
Email:\n
${question2} \n


## 6:Licence
${licence}


  `

}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your project name?',
    },
    {
      type: 'editor',
      message: 'What do people need to know to install your progamme?',
      name: 'install',
    },
    {
      type: 'editor',
      message: 'How do you use this project?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What licence are you granting this project?',
      name: 'licence',
      choices: ['MIT', 'AGPL_3.0', 'GPL_3.0', 'LGPL_3.0', 'MPL_2.0', 'Apache_2.0', 'BSL_1.0', 'Unlicense'],
    },
    {
      type: 'rawlist',
      message: 'Are you allowing contributions?',
      name: 'contribute',
      choices: ['I am', 'I am not', 'I am not (with exceptions)'],
    },
    {
      type: 'editor',
      message: 'What do people need to know to test this file?',
      name: 'test',
    },
    {
      type: 'imput',
      message: 'What is your github username',
      name: 'question1',
    },
    {
      type: 'imput',
      message: 'What is your email',
      name: 'question2',
    },
  ])
  .then((response) => {
    fs.writeFile("README.md", returnReadme(response), err => console.log(err))
  })