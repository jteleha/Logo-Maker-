const inquirer = require('inquirer');
const { generateSVG } = require('./lib/svgGenerator');

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
            validate: (input) => {
                return /^#[0-9A-F]{6}$/i.test(input) || ['black', 'white', 'red', 'green', 'blue'].includes(input.toLowerCase());
            },
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
            validate: (input) => {
                return /^#[0-9A-F]{6}$/i.test(input) || ['black', 'white', 'red', 'green', 'blue'].includes(input.toLowerCase());
            },
        },
    ]);
}

async function run() {
    try {
        const userInput = await userPrompt();
        const svgContent = generateSVG(userInput);
        console.log('Logo generated!');
    } catch (error) {
        console.error('Error during logo generation:', error);
    }
}

run();