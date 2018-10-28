function strangeSum(a, b) {
	if (!Number.isInteger(a) || !Number.isInteger(b))
		return null;
	return a == b ? (a+b) * 3 : a+b;
}