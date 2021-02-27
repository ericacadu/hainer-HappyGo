const getElemt = (elemt) => document.querySelectorAll(elemt)
const ribbons = getElemt('.ribbon')
function scrollRibbon() {
	let y = window.pageYOffset
	ribbons.forEach( item => {
		item.style.marginTop = -(y * 0.25) + 'px'
	})
}

window.addEventListener('scroll', scrollRibbon)