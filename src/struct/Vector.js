class Vector {
  constructor(x, y) {
    if (arguments.length === 1 && arguments[0] instanceof Vector) {
      const vector = arguments[0]
      this.x = vector.x
      this.y = vector.y
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
    this.x *= vector.y
    this.y *= vector.x
    return this
  }

  translate(vector) {
    return this.add(vector)
  }

  rotate(center, angle) {
    const x = this.x - center.x
    const y = this.y - center.y
    this.x = center.x + x * Math.cos(angle) - y * Math.sin(angle)
    this.y = center.y + x * Math.sin(angle) + y * Math.cos(angle)
    return this
  }

  scale(factor) {
    this.x *= factor
    this.y *= factor
    return this
  }
}

module.exports = Vector
