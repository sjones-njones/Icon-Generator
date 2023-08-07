const { Circle, Square, Triangle } = require('./Shapes');

describe('Shape', () => {

  describe('Circle', () => {
    it('should create a blue circle of varying color with varying text inside based on user input', () => {
      const shapeCircle = new Circle();
      shapeCircle.setColor('blue');
      expect(shapeCircle.render()).toEqual(`<circle cx="150" cy="105" r="90" stroke="blue" fill="blue" stroke-width="5"/>`);
    })
  })

  describe('Circle', () => {
    it('should create a red circle of varying color with varying text inside based on user input', () => {
      const shapeCircle = new Circle();
      shapeCircle.setColor('red');
      expect(shapeCircle.render()).toEqual(`<circle cx="150" cy="105" r="90" stroke="red" fill="red" stroke-width="5"/>`);
    })
  }) 

  describe('Square', () => {
    it('should create a blue square of varying color with varying text inside based on user input', () => {
      const shapeSquare = new Square();
      shapeSquare.setColor('blue');
      expect(shapeSquare.render()).toEqual(`<rect x="89" y="50" width="120" height="120" stroke="blue" fill="blue" stroke-width="5"/>`);
    })
  })

  describe('Square', () => {
    it('should create a red square of varying color with varying text inside based on user input', () => {
      const shapeSquare = new Square();
      shapeSquare.setColor('red');
      expect(shapeSquare.render()).toEqual(`<rect x="89" y="50" width="120" height="120" stroke="red" fill="red" stroke-width="5"/>`);
    })
  })

  describe('Triangle', () => {
    it('should create a red triangle of varying color with varying text inside based on user input', () => {
      const shape = new Triangle();
      shape.setColor('red');
      expect(shape.render()).toEqual(`<polygon points="145, 10 239, 162 71, 162" fill="red" />`);
    })
  })

  describe('Triangle', () => {
    it('should create a blue triangle of varying color with varying text inside based on user input', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(`<polygon points="145, 10 239, 162 71, 162" fill="blue" />`);
    })
  })

})