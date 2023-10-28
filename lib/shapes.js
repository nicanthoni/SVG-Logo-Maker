class Shapes {}

Shapes.prototype.render = function () {};
// render() returns a string for the corresponding SVG file with the given shape color.













module.exports = Shapes;
// THE FOLLOWING EXAMPLE TEST SHOULD PASS:
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');