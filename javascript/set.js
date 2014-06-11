function Set() {
	this.totalItems = 0;
	this.elements = new Object();
}

Set.prototype.count = function () {
	return this.totalItems;
}

Set.prototype.add = function (thing) {
	this.elements[this.totalItems] = thing;
	this.totalItems++;
}

Set.prototype.getElementAt = function (index) {
	return this.elements[index];
}

Set.prototype.getIndexOf = function (value) {
	for (var i = 0; i < this.count(); i++) {
		if (this.elements[i] === value) {
			return i;
		}
	}
	return undefined;
}

Set.prototype.remove = function (value) {
	var index = this.getIndexOf(value);
	var elements = new Object();
	for (var i = 0; i < this.count(); i++) {
		if (i != index) {
			elements[i] = this.elements[i];
		}
	}
	this.elements = elements;
	this.totalItems--;
}

module.exports = Set;