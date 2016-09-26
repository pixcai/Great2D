const Vector = require('./vector')

class Rect {
  constructor(x, y, width, height) {
    if (arguments.length === 1 && arguments[0] instanceof Rect) {
      this.width = arguments[0].width
      this.height = arguments[0].height
      this.topLeft = new Vector(arguments[0].topLeft)
      this.topRight = new Vector(arguments[0].topRight)
      this.bottomLeft = new Vector(arguments[0].bottomLeft)
      this.bottomRight = new Vector(arguments[0].bottomRight)
    } else {
      this.width = width
      this.height = height
      this.topLeft = new Vector(x, y)
      this.topRight = new Vector(x + width, y)
      this.bottomLeft = new Vector(x, y + height)
      this.bottomRight = new Vector(x + width, y + height)
    }
  }

  center() {
    const vertices = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    return vertices.reduce((vertex, next) => vertex.add(next), new Vector(0, 0)).scale(1 / 4)
  }

  translate(vector) {
    const vertices = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    vertices.forEach(vertex => vertex.translate(vector))
    return this
  }

  rotate(angle) {
    const center = this.center()
    const vertices = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    vertices.forEach(vertex => vertex.rotate(center, angle))
    return this
  }

  scale(factor) {
    const center = this.center()
    const vertices = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    vertices.forEach(vertex => vertex.subtract(center).scale(factor).add(center))
    this.width *= factor
    this.height *= factor
    return this
  }
}

module.exports = Rect
