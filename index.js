const inquirer = require('inquirer');
const { generateSVG } = require('./svgGenerator');

function userPrompt() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => {
                if (input.length <= 3) {
                    return true;
                }
                return 'Input invalid. Please enter up to three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color keyword (or a hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a shape color keyword (or a hexadecimal number):',
        },
    ]);
}