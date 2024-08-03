const msgList = ["DAY", "MONTH", "YEAR"]

for (const item of msgList) {
	const target = document.getElementById(`${item}-message`)
	const targetTitle = document.querySelector(`#${item}-card > label > div:first-child`)
	const targetInput = document.querySelector(`#${item}-card input`)
	console.log(`${item} targets:`, target, targetTitle, targetInput)
	document.addEventListener("htmx:afterSwap", () => {
		if (target.innerText.length === 0) {
			targetTitle.classList.add("warning")
			targetInput.classList.add("bg_warning")
		} else {
			targetTitle.classList.remove("warning")
			targetInput.classList.remove("bg_warning")

		}
	})
}
