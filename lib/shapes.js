//creates Shapes parent object and gives it text, colour, and shapeColour values for the SVG provided by user
class Shapes {
    constructor(text,colour,shapeColour) {
        this.text = text;
        this.colour = colour;
        this.shapeColour = shapeColour;
    }
}
// creates child square object which inherits all parent attributes and adds a render function which generates a square SVG based on parent attributes.
class Square extends Shapes {
    render() {
        return `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="${this.shapeColour}"/><text x="125" y="135" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }
    
}
// creates child triangle object which inherits all parent attributes and adds a render function which generates a triangular SVG based on parent attributes.
class Triangle extends Shapes {
    render() {
        return `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}"/><text x="150" y="130" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }

}
// creates child circle object which inherits all parent attributes and adds a render function which generates a circular SVG based on parent attributes.
class Circle extends Shapes {
    render() {
        return `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="${this.shapeColour}"/><text x="150" y="125" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }
    
}

//exports square, triangle and circle objects 
module.exports = {Square, Triangle, Circle}