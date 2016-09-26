const Vector = require('../math/Vector')

class Circle {
  constructor(x, y, radius) {
    if (arguments.length === 1 && arguments[0] instanceof Circle) {
      this.center = new Vector(arguments[0].center)
      this.radius = arguments[0].radius  
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
