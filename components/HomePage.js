import ReactiveCard from "./ReactiveCard.js"

const HomePage = () => {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="/app.css">
  <script src="/htmx.js" defer></script>
  
  <title>Age calculator app</title>
</head>
<body>
<div class='flex column main-card'>
<form class="flex column reactive-card"
hx-post='/input'
hx-target='.display'
>
<div class="flex">
${ReactiveCard('DAY', 'DD')}
${ReactiveCard('MONTH', 'MM')}
${ReactiveCard('YEAR', 'YYYY')}
</div>
<div style="margin-top: 1.5rem; position: relative;">
  <hr>
  <button class="align_button" type='submit'>
<img src="assets/images/icon-arrow.svg" alt="Calculate Age">
</button>
</div>
</form>

<div class='display'>
  <div id='year'>-- years</div>
  <div id='month'>-- months</div>
  <div id='day'>-- days</div>
</div>
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Ozzy-codes</a>.
  </div>
</div>
</body>
</html>
`
}
export default HomePage
