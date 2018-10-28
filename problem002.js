function stringRotate(a, b) {
	if (isNaN(b) || b < 0)
		return "";
	return a.slice(b) + a.slice(0, b);
}