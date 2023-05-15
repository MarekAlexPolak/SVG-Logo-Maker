//Import all required files
const { Triangle, Square, Circle } = require("./shapes.js");

//generateSVG Function
function generateSVG(data){

//switch statement compares shape attribute of data with each case
  switch (data.shape) {

    //if the shape chosen was square
    case "Square":
      const square = new Square(
        data.text,
        data.colour,
        data.shapeColour
      );
      //breaks the switch statement by returning a rendered square SVG
      return square.render();

    //if the shape chosen was triangle
    case "Triangle":
      const triangle = new Triangle(
        data.text,
        data.colour,
        data.shapeColour
      );
      //breaks the switch statement by returning a rendered triangle SVG
      return triangle.render();

    //if the shape chosen was circle
    case "Circle":
      const circle = new Circle(
        data.text,
        data.colour,
        data.shapeColour
      );
      //breaks the switch statement by returning a rendered circle SVG
      return circle.render();
  };
};

//exports generateSVG function
module.exports = generateSVG