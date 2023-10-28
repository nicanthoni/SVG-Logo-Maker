// cli.js is to handle user input (prompts, etc)
const inquirer = require('inquirer');
const fs = require('fs');

// have to create classes in shapes.js file for each below shape
const {Circle, Triange, Square} = require('');


const genSVG = ({ text, textColor, shape, shapeColor, }) => {

    if (shape === 'Circle') { 
        // ...  CHANGE BELOW TO THIS STYLE of returns: return var circle = new Circle(text, textColor, shape, shapeColor)
        return ` 
        <svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill=${shapeColor} /></svg> 
        `
    } else if
        (shape === 'Triangle') {
        return `
        <svg height="210" width="500">
  <polygon points="200,10 250,190 160,210" style="fill:${shapeColor};stroke:black;stroke-width:1" /></svg>
        `
    } else

        (shape === 'Square') 
        return `
        <svg width="400" height="110">
  <rect width="300" height="100" style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" /></svg>
        `
    return `${text}, ${textColor}, ${shape}, ${shapeColor}`;
};


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color of the text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color of the shape'
    }
];


function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const svgStyle = genSVG(answers);

            fs.writeFile('logo.svg', svgStyle, (err) =>
                err ? console.log(err) : console.log('A new logo.svg has been successfully created!')

            );
        });
}

init();