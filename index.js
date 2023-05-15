// Import all required libraries and files
const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle} = require('./lib/shapes');
const generateSVG = require('./lib/generate');

//Questions array used to generate attributes for SVG
const questions = [
    {
        type: 'input',
        name: 'text',
        message:'Please enter what you would like your logo to display? (This must be between 0 and 3 characters)',
        //validates the correct input length
        validate: (input) => 0 < input.length && input.length < 4
    },
    {
        type: 'input',
        name: 'colour',
        message:'Please choose a text colour by typing the name or hexidecimal code.'
    },
    {
        type: 'input',
        name: 'shapeColour',
        message:'Please input your desired logo colour by typing the name or hecidecimal code.'
    },
    {
        type: 'list',
        name: 'shape',
        message:'Please choose your desired shape.',
        choices: ['Square', 'Triangle', 'Circle']
    },
    {
        type: 'input',
        name: 'fileName',
        message:'What would you like to name your file?'  
    }
]

//function to write the SVG file
function writeSVG(logo, fileName) {
    fs.writeFile(fileName, logo, err => {
        if (err) console.log (err);
    });
}
//run function
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeSVG(generateSVG(data),`./examples/${data.fileName}.svg`);
    })
}
//call run function
init();
