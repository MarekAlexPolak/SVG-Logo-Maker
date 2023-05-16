//Import required files
const { Triangle, Square, Circle } = require("./shapes.js");
//test case for square
describe("Square", () => {
    test("test for a square with given attributes", () => {
      const shape = new Square("Testing Text","white","purple");
      //checks if render function output matches provided parameters
      expect(shape.render()).toEqual(
        `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="150" height="150" fill="purple"/><text x="125" y="135" text-anchor="middle" fill="white" font-size="40">Testing Text</text></svg>`
      );
    });
  });
//test case for triangle
describe("Triangle", () => {
  test("test for a triangle with given attributes", () => {
    const shape = new Triangle("Testing Text","white","blue");
    //checks if render function output matches provided parameters
    expect(shape.render()).toEqual(
        `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="150" y="130" text-anchor="middle" fill="white" font-size="40">Testing Text</text></svg>`
    );
  });
});
//test case for circle
describe("Circle", () => {
  test("test for a circle with given attributes", () => {
    const shape = new Circle("Testing Text","white","#808080");
    //checks if render function output matches provided parameters
    expect(shape.render()).toEqual(
        `<svg version = "1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="#808080"/><text x="150" y="125" text-anchor="middle" fill="white" font-size="40">Testing Text</text></svg>`
    );
  });
});