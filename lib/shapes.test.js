// const { describe } = require('node:test');
const Shape = require('./Shapes');

describe('Shape', () => {

  describe('Triangle', () => {
    it('should create a triangle of varying color with varying text inside based on user input', () => {
      const shape = new Triangle();
      shape.setColor('blue');
      expect(shape.render()).toEqual(`<polygon points="160, 10 244, 162 66, 162" fill="blue"  />`);

    })
  })
})