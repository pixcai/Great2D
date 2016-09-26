class Vector {
  constructor(x, y) {
    if (arguments.length === 1 && arguments[0] instanceof Vector) {
      this.x = arguments[0].x
      this.y = arguments[0].y
    } else {
      this.x = x
      this.y = y
    }
  }

  add(vector) {
    this.x += vector.x
    this.y += vector.y
    return this
  }

  subtract(vector) {
    this.x -= vector.x
    this.y -= vector.y
    return this
  }

  dot(vector) {
    return this.x * vector.x + this.y * vector.y
  }

  cross(vector) {
    return this.x * vector.y - this.y * vector.x
  }
}

module.exports = Vector
