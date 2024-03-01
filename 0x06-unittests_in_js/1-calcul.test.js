const assert = require("assert");
const calculateNumber = require('./1-calcul')

describe("type = SUM", function() {
	it("SUM of a and b", function() {
		const result = calculateNumber("SUM", 1, 2)
		assert.equal(result, 3)
	});
	it("round off first number", function() {
		const result = calculateNumber("SUM", 1.1, 2)
		assert.equal(result, 3)
	});
	it("round off second number", function() {
		const result = calculateNumber("SUM", 1, 2.2)
		assert.equal(result, 3)
	});
	it("a and b are rounded off", function() {
		const result = calculateNumber("SUM", 1.1, 2.2)
		assert.equal(result, 3)
	});
});
describe("type = SUBTRACT", function() {
        it("Difference of a and b with -ve result", function() {
                const result = calculateNumber("SUBTRACT", 1, 2)
                assert.equal(result, -1)
        });
	it("Difference of a and b", function() {
		const result = calculateNumber("SUBTRACT", 2, 1)
		assert.equal(result, 1)
	});
        it("round off first number", function() {
                const result = calculateNumber("SUBTRACT", 3.1, 2)
                assert.equal(result, 1)
        });
        it("round off second number", function() {
                const result = calculateNumber("SUBTRACT", 4, 2.2)
                assert.equal(result, 2)
        });
        it("a and b are rounded off", function() {
                const result = calculateNumber("SUBTRACT", 5.1, 2.2)
                assert.equal(result, 3)
        });
});
describe("type = DIVIDE", function() {
        it("DIVISION of a and b", function() {
                const result = calculateNumber("DIVIDE", 1, 4)
                assert.equal(result, 0.25)
        });
        it("round off first number", function() {
                const result = calculateNumber("DIVIDE", 1.1, 4)
                assert.equal(result, 0.25)
        });
        it("round off second number", function() {
                const result = calculateNumber("DIVIDE", 1, 4.5)
                assert.equal(result, 0.2)
        });
        it("a and b are rounded off", function() {
                const result = calculateNumber("DIVIDE", 1.4, 4.5)
                assert.equal(result, 0.2)
        });
	it("when b = 0", function() {
		const result = calculateNumber("DIVIDE", 1.4, 0)
		assert.equal(result, 'Error')
	});
});
