import express from 'express'
import HomePage from './components/HomePage.js'
import validateInput from './model/validateInput.js'

const app = express()
app.listen(3000, () => console.log('Listening on port 3000'))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send(HomePage())
})

app.post('/input', (req, res) => {
	//	TODO: need to update logic to validate input before replacing display card
	const day = req.body.DD
	const month = req.body.MM
	const year = req.body.YYYY
	console.log(req.body)

	const validateOutput = validateInput(+day, +month, +year)
	console.log(validateOutput)

	res.send(`
<div>${year} years</div>
<div>${month} months</div>
<div>${day} days</div>
`)
})
