// const { describe } = require('node:test');
const Shape = require('./Shapes');

describe('Shape', () => {

  describe('Circle', () => {
    it('should create a circle of varying color with varying text inside based on user input', () => {
      const shapeCircle = new Circle();
      shapeCircle.setColor('blue');
      expect(shapeCircle.render()).toEqual(`<circle cx="150" cy="105" r="80" stroke="blue" fill="blue" stroke-width="5"/>`);
    })
  })

  describe('Square', () => {
    it('should create a square of varying color with varying text inside based on user input', () => {
      const shapeSquare = new Square();
      shapeSquare.setColor('blue');
      expect(shapeSquare.render()).toEqual(`<rect x="107" y="63" width="90" height="90" stroke="blue" fill="blue" stroke-width="5"/>`);
    })
  })

  describe('Triangle', () => {
    it('should create a triangle of varying color with varying text inside based on user input', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(`<polygon points="160, 10 244, 162 66, 162" fill="blue"  />`);
    })
  })

})