function findMax() {
	var max = Number.MIN_SAFE_INTEGER;
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] > max)
			max = arguments[i];
	}
	return max;
}