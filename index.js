const inquirer = require('inquirer');
const fs = require('fs');

function returnReadme(responses) {
  const { name, install, usage, Licence, contribute, test, question1, question2 } = responses
  return `
## ${name}


##Table of Contents
  1:Installation
  2:Usage
  3:Licence
  4:Contributing
  5:Tests
  6:Questions

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
If you have futher questions or would like to contribute, please contact me at one of the following
GitHub:
https://github.com/${question1}
Email:
${question2}


## 6:Licence
${Licence}


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
      choices: ['MIT', 'AGPL-3.0-or-later', 'GPL-3.0-or-later', 'LGPL-3.0-or-later', 'MPL-2.0', 'Apache-2.0', 'BSL-1.0', 'Unlicense'],
    },
    {
      type: 'checkbox',
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