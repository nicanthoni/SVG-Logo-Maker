const { Error } = require("console"); // needed? I dont remember this

class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;


        if (text.length > 3) {
            throw new Error('Please enter 3 or less characters.');
        }
    };
    render() { };
    // render() returns a string for the corresponding SVG file with the given shape color.
};


class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    };
};


class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
};


class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
};



// Do i neeed to export every class?
module.exports = Shapes;
module.exports = { Circle, Triangle, Square };