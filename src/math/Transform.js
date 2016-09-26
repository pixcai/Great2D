class Transform {
  static translate(vector) {
    return this.add(vector)
  }

  static rotate(center, angle) {
    const x = this.x - center.x
    const y = this.y - center.y
    this.x = center.x + x * Math.cos(angle) - y * Math.sin(angle)
    this.y = center.y + x * Math.sin(angle) + y * Math.cos(angle)
    return this
  }

  static scale(factor) {
    this.x *= factor
    this.y *= factor
    return this
  }
}

module.exports = Transform
