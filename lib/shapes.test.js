const { describe } = require('yargs'); // needed? I dont remember this
const Shapes = require('./shapes');
const { Circle, Triangle, Square } = require('./shapes');

// A (1) test for each shape is needed (circle, triangle, square) to make sure it renders
describe('Shapes', () => {
    

    describe('Circle', () => {
        it('should create a Circle shaped SVG, with `txt` as text, red text color, and yellow shape', () => {
            const circle = new Circle('txt', 'red', 'yellow');
            const svg = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"> 
   <circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="yellow" />
   <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">txt</text>
   </svg> `
            const actualSVG = circle.render();
            expect(actualSVG).toEqual(svg);
        });
    });
});


// THE FOLLOWING EXAMPLE TEST SHOULD PASS:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');