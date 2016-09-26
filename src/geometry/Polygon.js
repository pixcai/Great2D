const Vector = require('./vector')

class Polygon {
  constructor(...vertices) {
    if (vertices.length === 1 && vertices[0] instanceof Polygon) {
      this.vertices = []
      vertices[0].vertices.forEach(vertex => this.vertices.push(new Vector(vertex)))
    } else {
      this.vertices = vertices
    }
  }
  
  center() {
    const vertices = this.vertices
    return vertices.reduce((vertex, next) => vertex.add(next), new Vertex(0, 0)).scale(1 / verties.length)
  }

  translate(vector) {
    this.vertices.forEach(vertex => vertex.translate(vector))
    return this
  }

  rotate(angle) {
    const center = this.center()
    this.vertices.forEach(vertex => vertex.rotate(center, angle))
    return this
  }

  scale(factor) {
    const center = this.center()
    this.vertices.forEach(vertex => vertex.subtract(center).scale(factor).add(center))
    return this
  }
}

module.exports = Polygon
