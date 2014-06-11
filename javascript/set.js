function Set() {
	this.elements = new Object();
	this.totalItems = 0;
}

Set.prototype.add = function (value) {
	this.elements[this.totalItems] = value;
	this.totalItems++;
}

Set.prototype.count = function (criteria) {
	if (criteria) {
		var count = 0;
		for (var i = 0; i <= this.totalItems; i++) {
			if (criteria(this.elements[i]))
				count++;
		}
		return count;
	}

	return this.totalItems;
}

Set.prototype.indexOf = function (value) {
	for (var i = 0; i <= this.totalItems; i++) {
		if (this.elements[i] === value) {
			return i;
		}
	};
	throw new Error("Could not find object in set");
}

module.exports = Set;