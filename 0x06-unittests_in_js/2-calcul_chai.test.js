const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai')

describe("type = SUM", function() {
	it("SUM of a and b", function() {
		const result = calculateNumber("SUM", 1, 2)
		expect(result).to.be.equal(3);
	});
	it("round off first number", function() {
		const result = calculateNumber("SUM", 1.1, 2)
		expect(result).to.be.equal(3);
	});
	it("round off second number", function() {
		const result = calculateNumber("SUM", 1, 2.2)
		expect(result).to.be.equal(3);
	});
	it("a and b are rounded off", function() {
		const result = calculateNumber("SUM", 1.1, 2.2)
		expect(result).to.be.equal(3);
	});
});
describe("type = SUBTRACT", function() {
        it("Difference of a and b with -ve result", function() {
                const result = calculateNumber("SUBTRACT", 1, 2)
                expect(result).to.be.equal(-1);
        });
	it("Difference of a and b", function() {
		const result = calculateNumber("SUBTRACT", 2, 1)
		expect(result).to.be.equal(1);
	});
        it("round off first number", function() {
                const result = calculateNumber("SUBTRACT", 3.1, 2)
                expect(result).to.be.equal(1);
        });
        it("round off second number", function() {
                const result = calculateNumber("SUBTRACT", 4, 2.2)
                expect(result).to.be.equal(2);
        });
        it("a and b are rounded off", function() {
                const result = calculateNumber("SUBTRACT", 5.1, 2.2)
                expect(result).to.be.equal(3);
        });
});
describe("type = DIVIDE", function() {
        it("DIVISION of a and b", function() {
                const result = calculateNumber("DIVIDE", 1, 4)
                expect(result).to.be.equal(0.25);
        });
        it("round off first number", function() {
                const result = calculateNumber("DIVIDE", 1.1, 4)
		expect(result).to.be.equal(0.25);
        });
        it("round off second number", function() {
                const result = calculateNumber("DIVIDE", 1, 4.5)
                expect(result).to.be.equal(0.2);
        });
        it("a and b are rounded off", function() {
                const result = calculateNumber("DIVIDE", 1.4, 4.5)
                expect(result).to.be.equal(0.2);
        });
	it("when b = 0", function() {
		const result = calculateNumber("DIVIDE", 1.4, 0)
		expect(result).to.be.equal('Error');
	});
});
