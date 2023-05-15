const inquirer = require("inquirer");
const fs = require("fs");
const {triangle, square, circle} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "title",
        message:"This will be the text"
    },
    {
        type: "input",
        name: "title",
        message:"This will be the text"
    },
    {
        type: "input",
        name: "title",
        message:"This will be the text"
    },
    {
        type: "input",
        name: "title",
        message:"This will be the text"
    },
    {
        type: "input",
        name: "title",
        message:"This will be the text"
    },
    {
        type: "input",
        name: "title",
        message:"This will be the text"
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