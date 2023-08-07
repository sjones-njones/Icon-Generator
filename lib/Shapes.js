class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="105" r="90" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="89" y="50" width="120" height="120" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}

class Triangle extends Shape {
  render() { 
    return `<polygon points="145, 10 239, 162 71, 162" fill="${this.color}" />` }
}

module.exports = { Circle, Square, Triangle };
