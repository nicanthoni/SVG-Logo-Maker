class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {};
    // render() returns a string for the corresponding SVG file with the given shape color.
}


class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}
Circle.prototype.render = function () {};


class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}
Triange.prototype.render = function () {};


class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
}
Square.prototype.render = function () {};


// Do i neeed to export every class?
module.exports = Shapes;