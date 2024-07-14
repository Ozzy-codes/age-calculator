const ReactiveCard = (name, abv) => {
	return `
<div>
  <div>${name}</div>
  <input 
type="text"
placeholder="${abv}"
name="${abv}"
/>
</div>
`
}
export default ReactiveCard
