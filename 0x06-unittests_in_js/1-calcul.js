/**
 *
 * function that takes 3 arguments( type[SUM, DIVIDE, SUBTRACT, a, b)
 *
 * */
function calculateNumber(type, a, b) {
	if (type === 'SUM') {
		return Math.round(a) + Math.round(b)
	}
	if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b)
	}
	if (type === 'DIVIDE') {
		a = Math.round(a);
		b = Math.round(b);
		if (b === 0) {
			return ("Error")
		}
		return a / b
	}
}
module.exports = calculateNumber
