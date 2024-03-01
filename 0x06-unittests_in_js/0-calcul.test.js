const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber(a, b)", function() {
	it("return sum", function() {
		const result = calculateNumber(3, 2)
		assert.equal(result, 5);
	});
	it("round of first number", function() {
		const result = calculateNumber(3.2, 2)
		assert.equal(result, 5)
	});
	it("round off second number", function() {
		const result = calculateNumber(3, 2.2)
		assert.equal(result, 5)
	});
	it("return sum of rounded numbers", function() {
		const result = calculateNumber(3.2, 2.2)
		assert.equal(result, 5)
	});
});
