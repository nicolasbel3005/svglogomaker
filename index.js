// index.js
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require ("./lib/Triangle")
const inquirer = require('inquirer');
const fs = require('fs');
const colors = ["red","green","blue","white","black"]
const questions = [
  {
    name: 'text',
    message: 'Enter up to 3 characters for your logo text:',
    validate: input => input.length <= 3
  },
  {
    name: 'textColor',
    message: 'Choose a text color:',
    type: 'list',
    choices: colors
  },
  {
    name: 'shape',
    message: 'Choose a shape:',
    type: 'list',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    name: 'shapeColor',
    message: 'Choose a shape color:',
    type: 'list',
    choices: colors
  }
]


function init(){
  inquirer
  .prompt(questions)
  .then((answers) => {
    let shape;
    if (answers.shape == "Triangle"){
       shape=new Triangle (answers.text, answers.textColor, answers.shapeColor)
    }
    if (answers.shape == "Square"){
       shape=new Square (answers.text, answers.textColor, answers.shapeColor)
    }
    if (answers.shape == "Circle"){
       shape=new Circle (answers.text, answers.textColor, answers.shapeColor)
    }
    // add Square and Circle if statements

    // console.log (shape.render())
writeToFile(`./examples/${answers.shape}.svg`,shape.render())

    // google what an SVG file is and how to write an SVG -W3Schools
    // using this shape object, generate an SVG, then use fs.WriteFile from previou challenge to create the output.svg file in the examples older
    // read the GET STARTED page for jest on the jest website
  })

}
function writeToFile(fileName, data) {


  fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log ("successfully wrote file")
  });
}
init() 