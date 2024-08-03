# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Htmx](https://htmx.org/) - JS library
- [Node.js](https://nodejs.org/en) - JS runtime environment
- [TDD](https://www.geeksforgeeks.org/test-driven-development-tdd/) - Test Driven Development

### What I learned

- Near the beginning of this project I decided that I wanted to try out development via TDD, and it has been a really reassuring process. Not only do I feel confident that my unit does what it is intended to do, but I like the additional consequence of unit documentation. 
- Developing this app with a simple web API that just moves around strings, and leveraging the power of Htmx is fun, simple, and interesting. I'm looking forward to building simple apps that can quickly be powered by htmx.
- Writing a custom js event handler is not as easy when working with elements that are being replaced by htmx, even if you use htmx events. e.g.  *I have left the client script in my project for education purposes, I am not using the script in production*
**client JS**
```
const msgList = ["DAY", "MONTH", "YEAR"]

for (const item of msgList) {
	const target = document.getElementById(`${item}-message`)
	const targetTitle = document.querySelector(`#${item}-card > label > div:first-child`)
	const targetInput = document.querySelector(`#${item}-card input`)
	console.log(`${item} targets:`, target, targetTitle, targetInput)
	document.addEventListener("htmx:afterSwap", () => {
		if (target.innerText.length > 0) {
			targetTitle.classList.add("warning")
			targetInput.classList.add("bg_warning")
		} else {
			targetTitle.classList.remove("warning")
			targetInput.classList.remove("bg_warning")

		}
	})
}
```
**node js**
```
app.post('/input', (req, res) => {
	//	TODO: run check on inputs and send back appropriate message or value
	const day = req.body.DD
	const month = req.body.MM
	const year = req.body.YYYY

	const dayCheck = validateDay(day, month, year)
	const monthCheck = validateMonth(month, year)
	const yearCheck = validateYear(year)

	const dayRes = dayCheck.pass ? "" : `<div class="margin-top warning" id="DAY-message" hx-swap-oob='true'>${dayCheck.message}</div>`
	const monthRes = dayCheck.pass ? "" : `<div class="margin-top warning" id="MONTH-message" hx-swap-oob='true'>${monthCheck.message}</div>`
	const yearRes = dayCheck.pass ? "" : `<div class="margin-top warning" id="YEAR-message" hx-swap-oob='true'>${yearCheck.message}</div>`

	if (!dayCheck.pass || !monthCheck.pass || !yearCheck.pass) {
		res.setHeader('hx-reswap', 'none')
		return res.status(422).send(`
${dayRes} 
${monthRes}
${yearRes}
`)
	}
	const returnObj = getAge(day, month, year)

	res.send(`
<div><span>${returnObj.calculatedYear}</span> years</div>
<div><span>${returnObj.calculatedMonth}</span> months</div>
<div><span>${returnObj.calculatedDay}</span> days</div>

<div id="DAY-message" hx-swap-oob='true'></div>
<div id="MONTH-message" hx-swap-oob='true'></div>
<div id="YEAR-message" hx-swap-oob='true'></div>
`)
})
```
- Thus far it seems that if I involve styling in my state, that it is better to let htmx to handle it rather than to write custom js to create event listeners to add to a classlist.

### Continued development

- I'm looking forward to trying out a different backend on this project or an other one, I'm considering [Go](https://go.dev/). 

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Ozzy-Codes](https://github.com/Ozzy-codes)
- Frontend Mentor - [@Ozzy-codes](https://www.frontendmentor.io/profile/Ozzy-codes)
