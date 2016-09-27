class Shape {
	constructor(type) {
		this.id = ++Shape.__id__
		this.type = type
		/* Coefficient of Restitution
		 * Range: 0 <= e <= 1
		 * If e = 0, it is inelastic collision.
		 * If e = 1, it is elastic collision.
		 */
		this.e = 0
		/* Coefficient of Friction
		 * Range: 0 <= u <= 1
		 * It also can greater than 1.
		 */
		this.u = 1
		this.density = 1
	}
}

// Global shape identifier
Shape.__id__ = 0

Shape.TYPE_SEGMENT = Symbol('shape@segment')
Shape.TYPE_CIRCLE = Symbol('shape@circle')
Shape.TYPE_POLYGON = Symbol('shape@polygon')

module.exports = Shape
