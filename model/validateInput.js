const checkType = (day, month, year, obj) => {
	const genericMessage = 'Must be a valid '
	let pass = true

	if (day !== 0 && !day) {
		obj.day = genericMessage + 'day'
		pass = false
	}
	if (month !== 0 && !month) {
		obj.month = genericMessage + 'month'
		pass = false
	}
	if (year !== 0 && !year) {
		obj.year = genericMessage + 'year'
		pass = false
	}
	if (!pass) obj.pass = false

	return pass
}

const checkPastDate = (day, month, year, obj) => {
	let pass = true
	if (year > new Date().getFullYear()) {
		obj.year = 'Must be in the past'
		pass = false
	}
	if (month > new Date().getMonth() + 1) {
		obj.month = 'Must be in the past'
		pass = false
	}
	if (day > new Date().getDate()) {
		obj.day = 'Must be in the past'
		pass = false
	}
	if (!pass) obj.pass = false
	return pass
}

const validateInput = (day, month, year) => {
	console.log('validateInput arguments day, month, year:', day, month, year)
	const date = new Date(year, month - 1, day)
	const testObj = {
		pass: true,
		day: 'pass',
		month: 'pass',
		year: 'pass',
	}

	if (!checkType(day, month, year, testObj)) return testObj
	if (!checkPastDate(day, month, year, testObj)) return testObj

	if (year.toString().length < 4) {
		testObj.year = 'Please enter a year in YYYY format'
	}
	if (year < 0) {
		testObj.year = 'Must be a valid year'
	}

	if (month < 1 || month > 12) {
		testObj.month = 'Must be a valid month'
	}

	if (date.getDate() !== day) {
		testObj.day = 'Must be a valid day'
	}

	if (testObj.day !== 'pass' || testObj.month !== 'pass' || testObj.year !== 'pass') {
		testObj.pass = false
	}
	return testObj
}
export default validateInput
