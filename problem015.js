var Stack = {
	data: [],
	push: function(a, b=1) {
		for (var i = 0; i < b-1; i++) {
			this.data.push(null);
		}
		this.data.push(a);
	},
	pop: function(a=1) {
		for (var i = 0; i < a-1; i++) {
			this.data.pop();
		}
		return this.data.pop();
	}
}
