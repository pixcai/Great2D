const Vector = require('./vector')

class Rect {
  constructor(x, y, width, height) {
    if (arguments.length === 1 && arguments[0] instanceof Rect) {
      const rect = arguments[0]
      this.width = rect.width
      this.height = rect.height
      this.topLeft = new Vector(rect.topLeft)
      this.topRight = new Vector(rect.topRight)
      this.bottomLeft = new Vector(rect.bottomLeft)
      this.bottomRight = new Vector(rect.bottomRight)
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
    const verties = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    return verties.reduce((vertex, next) => vertex.add(next), new Vector(0, 0)).scale(1 / 4)
  }

  translate(vector) {
    const verties = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    verties.forEach(vertex => vertex.translate(vector))
    return this
  }

  rotate(angle) {
    const center = this.center()
    const verties = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    verties.forEach(vertex => vertex.rotate(center, angle))
    return this
  }

  scale(factor) {
    const center = this.center()
    const verties = [].concat(this.topLeft, this.topRight, this.bottomLeft, this.bottomRight)
    verties.forEach(vertex => vertex.subtract(center).scale(factor).add(center))
    this.width *= factor
    this.height *= factor
    return this
  }
}

module.exports = Rect
