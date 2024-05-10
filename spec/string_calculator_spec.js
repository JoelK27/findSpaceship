describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return 1 for a string containing "1"', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return 3 for a string containing "1,2"', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('should return 28 for a string containing "1,27"', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return 53 for a string containing "15,17,21"', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});

	it('should return 22 for a string containing "-1,23"', function() {
		expect(calculator.add('-1,23')).toEqual(22);
	});
});
