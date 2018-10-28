function triangleArea(a, b, c) {
	if (a>0 || b>0 || c>0 || isNaN(a) || isNaN(b) || isNaN(c))
		return -1;
	var p = (a+b+c)/2;
	return Math.round( Math.sqrt(p*(p-a)*(p-b)*(p-c)) * 100 ) / 100;
}

console.log(triangleArea("2",2,3));