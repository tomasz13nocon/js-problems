function stringRotate(a, b) {
	if (isNaN(b) || b < 0)
		return -1;
	return a.slice(b) + a.slice(0, b);
}

console.log(stringRotate('UniwersytetSlaski', 222));