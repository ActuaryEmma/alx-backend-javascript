const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber(a, b)", function() {
	it("return sum of rounded numbers", function() {
		const result = calculateNumber(1.5, 2.7)
		assert.equal(result, 5);
	});
});
