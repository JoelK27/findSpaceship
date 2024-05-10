// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	let result = 0
	let delimiter = ","
	if (string_numbers.includes(delimiter)) {
		let numbers = string_numbers.split(delimiter)
		numbers.forEach(number => {
			result += parseInt(number)
		})
	}
	else if (string_numbers !== ""){
		result = parseInt(string_numbers)
	}
	return result
};
