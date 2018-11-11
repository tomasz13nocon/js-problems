function deepFindAndCount(a, b) {
	var n = 0;
	for (var i = 0; i < a.length; i++) {
		if (Array.isArray(a[i]))
			n += deepFindAndCount(a[i], b);
		else if (a[i] === b)
			n++;
	}
	return n;
}
