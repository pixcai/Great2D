const Vector = require('./vector')

class Circle {
  constructor(x, y, radius) {
    if (arguments.length === 1 && arguments[0] instanceof Circle) {
      const circle = arguments[0]
      this.center = new Vector(circle.center)
      this.radius = circle.radius
    } else {
      this.center = new Vector(x, y)
      this.radius = radius 
    }
  }

  center() {
    return this.center
  }

  translate(vector) {
    return this.center.translate(vector)
  }

  rotate(angle) {
    return this
  }

  scale(factor) {
    this.radius *= factor
    return this
  }
}

module.exports = Circle
