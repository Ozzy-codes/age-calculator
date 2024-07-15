const validationFactory = (time) => {
	return (day, month, year) => {
		const returnObj = {
			target: time,
			pass: true,
			message: ''
		}

		const genericMessage = 'Must be a valid '
		const pastMessage = 'Must be in the past'

		if (time === 'day') {
			const dateObj = new Date(year, month - 1, day)
			if (day !== 0 && !day) {
				returnObj.message = genericMessage + 'day'
			}
			if (dateObj.getFullYear() === new Date().getFullYear() &&
				dateObj.getMonth() === new Date().getMonth() &&
				dateObj > new Date()) {
				returnObj.message = pastMessage
			}
			if (dateObj.getDate() && dateObj.getDate() !== day) {
				returnObj.message = genericMessage + 'day'
			}
			if (returnObj.message.length > 1) returnObj.pass = false
		} else if (time === 'month') {
			if (month !== 0 && !month) {
				returnObj.message = genericMessage + 'month'
			}
			if (year === new Date().getFullYear() &&
				month > new Date().getMonth() + 1) {
				returnObj.message = pastMessage
			}
			if (month < 1 || month > 12) {
				returnObj.message = genericMessage + 'month'
			}
			if (returnObj.message.length > 1) returnObj.pass = false
		} else if (time === 'year') {
			if (year > new Date().getFullYear()) {
				returnObj.message = pastMessage
			}
			if (year.toString().length < 4) {
				returnObj.message = 'Please enter a year in YYYY format'
			}
			if (year !== 0 && !year || year < 0) {
				returnObj.message = genericMessage + 'year'
			}
			if (returnObj.message.length > 1) returnObj.pass = false
		}
		return returnObj
	}
}

const validateDay = validationFactory('day')
const validateMonth = validationFactory('month').bind(null, null)
const validateYear = validationFactory('year').bind(null, null, null)

export { validateDay, validateMonth, validateYear }
