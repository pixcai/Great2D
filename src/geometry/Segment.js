const Shape = require('../core/Shape')
const Vector = require('../math/Vector')

class Segment extends Shape {
  constructor(start, end) {
    super(Shape.TYPE_SEGMENT)

    this.start = new Vector(start.x, start.y)
    this.end = new Vector(end.x, end.y)
  }
}

module.exports = Segment
