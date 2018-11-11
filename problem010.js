function deepCopy(a) {
/*	var r = [];
	for (var i = 0; i < a.length; i++)
		r.push(Array.isArray(a[i]) ? deepCopy(a[i]) : a[i]);
	return r;*/
	return JSON.parse(JSON.stringify(a));
}
