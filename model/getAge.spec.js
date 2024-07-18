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

