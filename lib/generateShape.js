function shape(shape){
  if (shape = "triangle"){
    shapeParameters = `polygon points="150, 18 244, 182 56, 182"`;
  }
  else if (shape = "square"){
    shapeParameters = `rect x="90" y="50" width="120" height="120"`;
  }
  else
  {
    shapeParameters = `circle cx="150" cy="100" r="80"`
  }
  generateShape(shapeParameters);
}
  
  function generateShape({ shape, characters, shapeColor, textColor }) {
  return ` <svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">

<${shapeParameters} fill="${shapeColor}">

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>

</svg>`
  
  }
  
  module.exports = shape;
  