import { it, expect } from "vitest"
import getAge from "./getAge"

it('should get correct age if birth month is > than current month and the birth day of the month is the same day as today', () => {
	const day = new Date().getDate()
	const month = ((new Date().getMonth() + 6) % 13) || 1
	const year = new Date().getFullYear() - 1

	const output = getAge(day, month, year)

	expect(output.calculatedDay).toBe(0)
	expect(output.calculatedMonth).toBe(7)
	expect(output.calculatedYear).toBe(0)
})
it('should get correct age if birth month is < than the current month and birth day of the month is the same as today', () => {
	const day = new Date().getDate()
	const month = new Date().getMonth() || 12
	const year = new Date().getFullYear() - 1

	const output = getAge(day, month, year)

	expect(output.calculatedDay).toBe(0)
	expect(output.calculatedMonth).toBe(1)
	expect(output.calculatedYear).toBe(1)
})
it('should get correct age if birth month is < than the current month and birth day of the month is > today', () => {
	const day = new Date().getDate() + 1
	const month = new Date().getMonth() || 12
	const year = new Date().getFullYear() - 1
	const calculatedDay = (new Date(year + 1, month, 0).getDate()) - day + (day - 1)

	const output = getAge(day, month, year)

	expect(output.calculatedDay).toBe(calculatedDay)
	expect(output.calculatedMonth).toBe(0)
	expect(output.calculatedYear).toBe(1)
})
