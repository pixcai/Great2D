const Vector = require('./Vector')

class Polygon {
  constructor(...verties) {
    this.verties = verties
  }
  
  center() {
    const verties = this.verties
    return verties.reduce((vertex, next) => vertex.add(next), new Vertex(0, 0)).scale(1 / verties.length)
  }

  translate(vector) {
    this.verties.forEach(vertex => vertex.translate(vector))
    return this
  }

  rotate(angle) {
    const center = this.center()
    this.verties.forEach(vertex => vertex.rotate(center, angle))
    return this
  }

  scale(factor) {
    const center = this.center()
    this.verties.forEach(vertex => vertex.subtract(center).scale(factor).add(center))
    return this
  }
}

module.exports = Polygon
