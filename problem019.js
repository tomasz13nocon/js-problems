function carry(a) {
	var args = [];
	var i = a.length;
	return function(x) {
		args.push(x);
		if (i-- > 1) {
			return arguments.callee;
		}
		return a(...args);
	}
}
