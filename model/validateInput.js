const validateInput = (day, month, year) => {
	console.log('validateInput arguments day, month, year:', day, month, year)
	const date = new Date(year, month - 1, day)
	// function returnObj(target) {
	// 	return {
	// 		target, message: `Must be a valid ${target}`
	// 	}
	// }
	const returnObj = {
		day: 'Pass',
		month: 'Pass',
		year: 'Pass',
	}

	if (year > new Date().getFullYear()) {
		returnObj.year = 'Must be in the past'
	}
	if (year.toString().length < 4) {
		returnObj.year = 'Please enter a year in YYYY format'
	}
	// if (date.getFullYear() !== year) {
	// 	returnObj.year = 'Must be a valid year'
	// }
	if (month < 1 || month > 12) {
		returnObj.month = 'Must be a valid month'
	}
	// if (date.getMonth() !== month - 1) {
	// 	returnObj.month = 'Must be a valid month'
	// }
	if (date.getDate() !== day) {
		returnObj.day = 'Must be a valid day'
	}
	return returnObj
}
export default validateInput
