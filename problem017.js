function compose() {
	var args = arguments;
	return function(x) {
		var r = x;;
		for (var i = args.length - 1; i >= 0; i--) {
			r = args[i](r);
		}
		return r;
	}
}
