const ReactiveCard = (name, abv) => {
	return `
<div id='${name}-card'>
  <label>${name}
  <input 
type="text"
placeholder="${abv}"
name="${abv}"
/></label>
</div>
`
}
export default ReactiveCard
