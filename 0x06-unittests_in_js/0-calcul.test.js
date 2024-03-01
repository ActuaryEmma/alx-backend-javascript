const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber(a, b)", function() {
	it("return sum of rounded numbers", function() {
		a = Math.round(a)
		b = Math.round(b)
		const result = calculateNumber(1.5, 2.7)
		assert.equal(result, 5);
	});
});
