const Shape = require('../core/Shape')
const Vector = require('../math/Vector')

class Circle extends Shape {
  constructor(x, y, radius) {
    super(Shape.TYPE_CIRCLE)

    this.center = new Vector(x, y)
    this.radius = radius
  }
}

module.exports = Circle
