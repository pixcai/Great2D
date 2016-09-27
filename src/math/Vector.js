class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
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
