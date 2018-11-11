function objectsDiff(a, b) {
	var r = [];
	var bprops = Object.keys(b);
	outer:
	for (prop in a) {
		for (var i = 0; i < bprops.length; i++) {
			if (prop === bprops[i]) {
				bprops.splice(i, 1);
				continue outer;
			}
		}
		r.push(prop);
	}
	r.push.apply(r, bprops);
	return r;
}

console.log(objectsDiff({x:1, y:1, z:1}, {w:2, x:2, z:2}));
