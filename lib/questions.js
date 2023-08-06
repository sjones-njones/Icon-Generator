// packages required 
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./Shapes.js');

class Questions {
  constructor() {
    this.characters = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = '';
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'characters',
          message: 'Enter up to 3 characters for your logo.'
        },
      ])
      .then((data) => {
        const charactersLength = data.characters.
          length
        if (charactersLength > 3) {
          console.log("Please enter no more than 3 characters.");
          this.run();
        }
        else {
          console.log("Success!")
          this.characters = data.characters;
          this.chooseLogo();
        }
      })
  }

  chooseLogo() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'textColor',
          message: 'What color should the text be?'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'What shape would you like for your logo',
          choices: ['circle', 'square', 'triangle']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color should the shape be?'
        },
      ])
      .then(({ shape, shapeColor, textColor }) => {
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        console.log(this);
        let newShape;
        if (shape === "circle") {
          newShape = new Circle();
        }
        else if (shape === "square") {
          newShape = new Square();
        }
        else {
          newShape = new Triangle();
        }

        newShape.setColor(this.shapeColor);
        console.log(newShape.render());

        const renderString = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${newShape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>

</svg>`;

        console.log(renderString);


        fs.writeFile(`./examples/yourLogo.svg`, renderString, (err) => err ? console.error(err) : console.log('Your logo is made!'));
      })
  }

}


module.exports = Questions;

