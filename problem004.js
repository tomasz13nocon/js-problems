function getTotalNumberOfNewYaersEveSundays(a, b) {
	var n = 0;
	for (; a <= b; a++) {
		if ( ( 1 + 5*((a-1)%4) + 4*((a-1)%100) + 6*((a-1)%400) ) % 7  == 0)
			n++;
	}
	return n;
}