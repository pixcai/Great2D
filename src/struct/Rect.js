const Vector = require('./Vector')

class Rect {
  constructor(x, y, width, height) {
    this.width = width
    this.height = height
    this.topLeft = new Vector(x, y)
    this.topRight = new Vector(x + width, y)
    this.bottomLeft = new Vector(x, y + height)
    this.bottomRight = new Vector(x + width, y + height)
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
