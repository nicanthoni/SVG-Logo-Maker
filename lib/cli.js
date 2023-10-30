// cli.js is to handle user input (prompts, etc)
const inquirer = require('inquirer');
const fs = require('fs');

// have to create classes in shapes.js file for each below shape
const { Circle, Triangle, Square } = require('./shapes');


const genSVG = ({ text, textColor, shape, shapeColor, }) => {

    if (shape === 'Circle') {
        let newCircle = new Circle(text, textColor, shape, shapeColor);
        return ` 
        <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="${shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg> 
        `
    } else if
        (shape === 'Triangle') {
        let newTriangle = new Triangle(text, textColor, shape, shapeColor);
        return `
        <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,10 250,190 160,210" style="fill:${shapeColor};stroke:black;stroke-width:1" />
        <text x="94%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    } else
        (shape === 'Square')
    let newSquare = new Square(text, textColor, shape, shapeColor);
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="100" style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
        <text x="50%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    return `${text}, ${textColor}, ${shape}, ${shapeColor}`; // needed?
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
                err ? console.log(err) : console.log('Generated logo.svg')

            );
        });
}

// init(); ----> Being called in the index file :) 

module.exports = init;