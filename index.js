const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Triangle, Circle} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message:"Please enter what you would like your logo to display? (This must be between 0 and 3 characters)"
    },
    {
        type: "input",
        name: "colour",
        message:"Please choose a text colour by typing the name or hexidecimal code."
    },
    {
        type: "input",
        name: "shapeColour",
        message:"Please input your desired logo colour by typing the name or hecidecimal code."
    },
    {
        type: "list",
        name: "shape",
        message:"Please choose your desired shape.",
        choices: ["Square", "Triangle", "Circle"]
    }
]

function generate(){

}

function askQuest() {
    inquirer.prompt(questions).then((data) => {
        generate(data);
    })
}

function writeSVG(logo, fileName) {
    fs.writeFile(fileName, logo, err => {
        if (err) console.log (err);
    });
}