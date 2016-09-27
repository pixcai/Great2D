class Joint {
	constructor(type, body1, body2, collideConnected) {
		this.id = ++Joint.__id__
		this.type = type

		this.body1 = body1
		this.body2 = body2

		this.collideConnected = collideConnected
	}
}

// Global joint identifier
Joint.__id__ = 0

Joint.TYPE_DISTANCE = Symbol('joint@distance')
Joint.TYPE_MOUSE = Symbol('joint@mouse')
Joint.TYPE_PRISMATIC = Symbol('joint@prismatic')
Joint.TYPE_REVOLUTE = Symbol('joint@revolute')
Joint.TYPE_WELD = Symbol('joint@weld')

module.exports = Joint
