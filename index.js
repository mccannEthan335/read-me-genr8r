// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const { writeFile } = require('fs').promises;




// TODO: Create an array of questions for user input

  const questions = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license for your project:',
            choices: ["MIT", "GNU", "Apache", "BSD"],
        },
        {
            type: 'input',
            name: 'contact',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
}


// TODO: Create a function to initialize app
const init = () => {
  questions() 
      // Use writeFile method imported from fs.promises
    .then((data) => writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();

// Function call to initialize app
init();
