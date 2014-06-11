var Set = require("../set.js");

describe("Given an empty set when adding two new objects", function () {
	var set;

	beforeEach(function() {
		set = new Set();
		set.add("hello");
		set.add("world cup");
	});

	it("should hold the new objects in the set", function () {
		expect(set.indexOf("hello")).toBe(0);
		expect(set.indexOf("world cup")).toBe(1);
	});

	it("should increment the count to two", function () {
		expect(set.count()).toBe(2);
	});

	it("should increment the count to three when adding a further object", function () {
		set.add("alright");
		expect(set.count()).toBe(3);
	});
});

describe("Given an set with three objects", function () {
	var set;

	beforeEach(function () {
		set = new Set();
		set.add(1);
		set.add(120);
		set.add(453);
	});

	it("should throw an exception if object is not in set", function () {
		expect(function () { set.indexOf(88) }).toThrow();
	});

	it("should be able to match more than one object doing a count", function () {
		expect(set.count(function (value) { return value > 2 })).toBe(2);
	});

	it("should return zero if count criteria is not met", function () {
		expect(set.count(function (value) { return value < 1 })).toBe(0);
	});
});