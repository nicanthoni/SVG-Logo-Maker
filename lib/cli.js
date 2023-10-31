// cli.js is to handle user input (prompts, etc)
const inquirer = require('inquirer');
const fs = require('fs');

// have to create classes in shapes.js file for each below shape
const { Circle, Triangle, Square } = require('./shapes');


const genSVG = ({ text, textColor, shape, shapeColor, }) => {

    if (shape === 'Circle') {
        let newCircle = new Circle(text, textColor, shapeColor);
        return newCircle.render();
    } else if
        (shape === 'Triangle') {
        let newTriangle = new Triangle(text, textColor, shapeColor);
        return newTriangle.render();
    } else if
        (shape === 'Square') {
        let newSquare = new Square(text, textColor, shapeColor);
        return newSquare.render();
    }
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