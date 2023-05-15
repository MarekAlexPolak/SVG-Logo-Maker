const { Triangle, Square, Circle } = require("./shapes.js");

function generateSVG(data){
  switch (data.shape) {
    case "Square":
      const square = new Square(
        data.text,
        data.colour,
        data.shapeColour
      );
      return square.render();

    case "Triangle":
      const triangle = new Triangle(
        data.text,
        data.colour,
        data.shapeColour
      );
      return triangle.render();

    case "Circle":
      const circle = new Circle(
        data.text,
        data.colour,
        data.shapeColour
      );
      return circle.render();
  };
};

module.exports = generateSVG