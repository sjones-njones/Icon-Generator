// constructor class to make shapes in svg file
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

// subclass to make circle
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="105" r="90" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
  }
}

// subclass to make square
class Square extends Shape {
  render() {
    return `<rect x="89" y="50" width="120" height="120" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}

// subclass to make triangle
class Triangle extends Shape {
  render() { 
    return `<polygon points="155, 10 244, 142 76, 142" fill="${this.color}" />` }
}


// exports functions
module.exports = { Circle, Square, Triangle };
