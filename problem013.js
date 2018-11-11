function parametricSort(a, b) {
	if (b === "desc") {
		return a.sort((c, d) => d-c);
	}
	else if (b === "asc") {
		return a.sort((c, d) => c-d);
	}
	else
		return false;
}
