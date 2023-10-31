const { Error } = require("console"); // needed? I dont remember this

class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

        if (text.length > 3) {
            throw new Error('Please enter 3 or less characters.');
        }
    };
};


class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50%" cy="50%" r="40" stroke="black" stroke-width="3" fill="${this.shapeColor}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg> `;
    }
};

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render() {
        return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 250,190 160,210" style="fill:${this.shapeColor};stroke:black;stroke-width:1" /><text x="94%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    };
    render () {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" /><text x="50%" y="25%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

// render() returns a string for the corresponding SVG file with the given shape color.

module.exports = Shapes;
module.exports = { Circle, Triangle, Square };