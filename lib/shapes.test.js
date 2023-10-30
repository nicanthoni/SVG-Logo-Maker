const { describe } = require('yargs'); // needed? I dont remember this
const Shapes = require('./shapes');
const { Circle, Triangle, Square } = require('./shapes');


describe('Text', () => {

    describe('Text length', () => {
        it('Should throw an error when the text length is greater than 3', () => {
            const cb = () => new Shapes('four', 'green', 'Circle', 'blue');
            const err = new Error('Please enter 3 or less characters.');

            expect(cb).toThrowError(err);
        });
    });

    describe('Text color', () => {})
         it('Should return false if a non-color string is passed into the text-color parameter', () => {
        const falseColor = 'surple';
        const result = new Shapes('txt', fakeColor, 'Circle', 'red');

        expect(result).toEqual(false);
    })
});



describe('Shapes', () => {

describe('Selected Shape', () => {
    it('should return false if any shape aside from a Circle, Square, or Triangle is chosen', () => {
     
        
    })
})

})






// THE FOLLOWING EXAMPLE TEST SHOULD PASS:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');