class Shapes {
    constructor(text,colour,shapeColour) {
        this.text = text;
        this.colour = colour;
        this.shapeColour = shapeColour;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColour}" /><text x="150" y="100" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }
    
}
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}" /><text x="150" y="100" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }

}
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.shapeColour}" /><text x="150" y="100" text-anchor="middle" fill="${this.colour}" font-size="40">${this.text}</text></svg>`;
    }
    
}

module.exports = {Square, Triangle, Circle}