const { Triangle, Square, Circle } = require("./shapes.js");

function generateSVG(){
  switch (data.shape) {
    case "Square":
      const square = new Square(
        data.text,
        data.colour,
        data.shapeColour,
        data.shape
      );
      return square.render();

    case "Triangle":
      const triangle = new Triangle(
        data.text,
        data.colour,
        data.shapeColour,
        data.shape
      );
      return triangle.render();

    case "Circle":
      const circle = new Circle(
        data.text,
        data.colour,
        data.shapeColour,
        data.shape,
      );
      return circle.render();
  };
};

module.exports = generateSVG