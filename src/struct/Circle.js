const Vector = require('./Vector')

class Circle {
  constructor(x, y, radius) {
    this.center = new Vector(x, y)
    this.radius = radius
  }

  translate(vector) {
    return this.center.add(vector)
  }

  scale(factor) {
    this.radius *= factor
    return this
  }
}

module.exports = Circle
