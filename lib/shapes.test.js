const { Triangle, Square, Circle } = require("./shapes.js");

describe("Square", () => {
    test("test for a square with a purple background", () => {
      const shape = new Square(title,colour,shapeCololur);
      Square.shapeColour = "purple";
      Square.colour = "white";
      Square.text = "Testing Text";
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="purple" />'
      );
    });
  });

describe("Triangle", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle(title,colour,shapeCololur);
    Triangle.shapeColour = "blue";
    Triangle.colour = "white";
    Triangle.text = "Testing Text";
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle(title,colour,shapeCololur);
    Circle.shapeColour = "#808080";
    Circle.colour = "white";
    Circle.text = "Testing Text";
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});