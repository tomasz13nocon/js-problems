var Vectors = {
	sum: function(a, b) {
		if (a.length !== b.length || !Array.isArray(a) || !Array.isArray(b))
			return false;
		c = [];
		for (var i = 0; i < a.length; i++) {
			c[i] = a[i] + b[i];
		}
		return c;
	},
	
	mulByScalar: function(a, b) {
		if (!Array.isArray(a) || typeof b !== "number")
			return false;
		c = [];
		for (var i = 0; i < a.length; i++) {
			c[i] = a[i] * b;
		}
		return c;
	}
}

console.log(isNaN([1]));
console.log(isNaN(""));
console.log(isNaN(1));
