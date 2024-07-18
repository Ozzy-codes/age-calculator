const getAge = (birthDay, birthMonth, birthYear) => {
	const birthDayInt = +birthDay
	const birthMonthInt = +birthMonth - 1
	const birthYearInt = +birthYear

	const currentDate = new Date()
	const currYear = currentDate.getFullYear()
	const currMonth = currentDate.getMonth()
	const currDay = currentDate.getDate()

	const monthDiff = birthMonthInt - currMonth
	console.log('monthDiff: ', monthDiff)
	const dayDiff = birthDayInt - currDay
	console.log('dayDiff: ', dayDiff)

	let calculatedYear;
	let calculatedMonth;
	let calculatedDay;

	if (monthDiff === 0) {
		console.log('monthdiff is equal to zero')
		if (dayDiff >= 0) {
			calculatedYear = currYear - birthYearInt
			calculatedMonth = 0
			calculatedDay = birthDayInt - currDay
		} else {
			calculatedYear = currYear - birthYearInt - 1
			calculatedMonth = 12
			calculatedDay = (new Date(currYear, currMonth + 1, 0).getDate()) - currDay + birthDayInt
		}
		console.log('output year, month, day: ', calculatedYear, calculatedMonth, calculatedDay)
		return { calculatedYear, calculatedMonth, calculatedDay }
	} else if (monthDiff > 0) {
		calculatedYear = currYear - birthYearInt - 1
		calculatedMonth = 12 - birthMonthInt + currMonth
		if (dayDiff >= 0) {
			calculatedDay = birthDayInt - currDay
		} else {
			calculatedDay = (new Date(currYear, currMonth + 1, 0).getDate()) - currDay + birthDayInt
		}
		return { calculatedYear, calculatedMonth, calculatedDay }
	}
}

export default getAge
