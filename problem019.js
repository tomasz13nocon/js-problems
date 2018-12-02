function carry(a) {
	var args = [];
	var i = a.length;
	return function(x) {
		args.push(x);
		if (i-- > 1) {
			return arguments.callee;
		}
		console.log(args);
		return a(...args);
	}
}

console.log(carry((a,b) => a-b)(2)(1));
