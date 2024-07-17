import express from 'express'
import HomePage from './components/HomePage.js'
import { validateDay, validateMonth, validateYear } from './model/validationFactory.js'
import getAge from './model/getAge.js'

const app = express()
app.listen(3000, () => console.log('Listening on port 3000'))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send(HomePage())
})

app.post('/input', (req, res) => {
	//	TODO: run check on inputs and send back appropriate message or value
	const day = req.body.DD
	const month = req.body.MM
	const year = req.body.YYYY
	console.log(req.body)

	// const validateOutput = validateInput(+day, +month, +year)
	const dayCheck = validateDay(day, month, year)
	const monthCheck = validateMonth(month, year)
	const yearCheck = validateYear(year)
	console.log('dayCheck: ', dayCheck)
	console.log('monthCheck: ', monthCheck)
	console.log('yearCheck: ', yearCheck)

	if (!dayCheck.pass || !monthCheck.pass || !yearCheck.pass) {
		res.setHeader('hx-reswap', 'none')
		return res.send(`
<div id="DAY-message" hx-swap-oob='true'>${dayCheck.message}</div>
<div id="MONTH-message" hx-swap-oob='true'>${monthCheck.message}</div>
<div id="YEAR-message" hx-swap-oob='true'>${yearCheck.message}</div>
`)
	}
	const returnObj = getAge(day, month, year)

	res.send(`
<div>${returnObj.calculatedYear} years</div>
<div>${returnObj.calculatedMonth} months</div>
<div>${returnObj.calculatedDay} days</div>

<div id="DAY-message" hx-swap-oob='true'></div>
<div id="MONTH-message" hx-swap-oob='true'></div>
<div id="YEAR-message" hx-swap-oob='true'></div>
`)
})
