const Shape = require('../core/Shape')
const Vector = require('../math/Vector')

class Polygon extends Shape {
  constructor(vertices = []) {
    super(Shape.TYPE_POLYGON)

    this.vertices = vertices.map(vertex => {
      return new Vector(vertex.x, vertex.y)
    })
  }
}

module.exports = Polygon
