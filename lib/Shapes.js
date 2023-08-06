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
    return `<circle cx="150" cy="105" r="80" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="107" y="63" width="90" height="90" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
  }
}

class Triangle extends Shape {
  render() { 
    return `<polygon points="160, 10 244, 162 66, 162" fill="${this.color}" />` }
}

module.exports = { Circle, Square, Triangle };
