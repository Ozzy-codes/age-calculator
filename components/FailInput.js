const FailInput = (name, abv, value, msg) => {
	return `
<div id='${name}-card' hx-swap-oob='true'>
  <label>
	<div class="warning">${name}</div>
  <input 
	type="text"
	class="margin-top bg_warning"
	value="${value}"
	name="${abv}"
	/>
	</label>
	<div class="margin-top warning" id='${name}-message'>${msg}</div>
</div>
`
}
export default FailInput
