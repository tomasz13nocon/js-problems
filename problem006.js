function divisible(a) {
	for (var i=1; i<arguments.length; i++) {
		if (a%arguments[i])
			return false;
	}
	return true;
}

console.log(divisible(15, 3, 5)); // true
console.log(divisible(15, 3, 5, 6)); // false