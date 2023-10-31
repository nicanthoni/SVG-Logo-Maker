
const Shapes = require('./shapes');
const { Circle, Triangle, Square } = require('./shapes');

// A (1) test for each shape is needed (circle, triangle, square) to make sure it renders
describe('Shapes', () => {

    describe('Circle', () => {
        it('should create a Circle shaped SVG, with `txt` as text, red text color, and a yellow shape', () => {
            const circle = new Circle('txt', 'red', 'yellow');
            const svg = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="yellow" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">txt</text></svg> `;
            const actualSVG = circle.render();

            expect(actualSVG).toEqual(svg);
        });
    });

    describe('Triangle', () => {
        it('should create a Triangle shaped SVG, with `hi` as text, white as text color, and a blue shape', () => {
            const triangle = new Triangle('hi', 'white', 'blue');
            const svg = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 250,190 160,210" style="fill:blue;stroke:black;stroke-width:1" /><text x="94%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">hi</text></svg>`;
            const actualSVG = triangle.render();

            expect(actualSVG).toEqual(svg);
        });
    });

    describe('Square', () => {
        it('should create a Square shaped SVG, with `FBI` as text, purple as text color, and a green shape', () => {
            const square = new Square('FBI', 'purple', 'green');
            const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:green;stroke-width:3;stroke:rgb(0,0,0)" /><text x="50%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="purple">FBI</text></svg>`;
            const actualSVG = square.render();

            expect(actualSVG).toEqual(svg);
        })
    })
});




// THE FOLLOWING EXAMPLE TEST SHOULD PASS:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');