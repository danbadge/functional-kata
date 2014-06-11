var Set = require("../set.js");

describe("Given an empty set", function () {
	var mySet;
	beforeEach(function() {
		mySet = new Set();
	});
	
	it("should be empty", function () {
		expect(mySet.count()).toBe(0);
	});

	it("should increment the count when adding a new object", function () {
		mySet.add("hello");
		expect(mySet.count()).toBe(1);
		mySet.add("something");
		expect(mySet.count()).toBe(2);
	});

	it("should hold an object which has been added", function () {
		mySet.add("hello");
		var value = mySet.getElementAt(0);
		expect(value).toBe("hello");
	});

	it("should return second object in the set", function () {
		mySet.add("hello");
		mySet.add("something");
		var value = mySet.getElementAt(1);
		expect(value).toBe("something");
	});

	it("should find the index of an object in the set", function () {
		mySet.add("hello");
		mySet.add("this");
		mySet.add("is");
		mySet.add("different");
	
		expect(mySet.getIndexOf("is")).toBe(2);
	});

	it("should decrement the count when removing objects from the set", function () {
		mySet.add("hello");
		mySet.remove("hello");
		expect(mySet.count()).toBe(0);
	});

	it("should remove the object from the set", function () {
		mySet.add("this");
		mySet.add("hello");
		mySet.add("thing");
		mySet.remove("hello");
		expect(mySet.getIndexOf("hello")).toBe(undefined);
	});	
});