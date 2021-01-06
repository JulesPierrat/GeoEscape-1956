let modal = null

function init_modal(){
	const target = document.querySelector("#modal1")
	target.style.display = null
	target.removeAttribute('aria-hidden')
	target.setAttribute('aria-modal' , 'true')
	modal = target
	modal.addEventListener('click' , closeModal)
	modal.querySelector('.closeInfo').addEventListener('click' , closeModal)
	modal.querySelector('.stopModal1').addEventListener('click' , stopPropagation)
	
	}

const openModal = function(e) {
	e.preventDefault()
	const target = document.querySelector(e.target.getAttribute('href'))
	target.style.display = null
	target.removeAttribute('aria-hidden')
	target.setAttribute('aria-modal' , 'true')
	modal = target
	modal.addEventListener('click' , closeModal)
	modal.querySelector('.closeInfo').addEventListener('click' , closeModal)
	modal.querySelector('.stopModal1').addEventListener('click' , stopPropagation)
}

const closeModal = function(e){
	if (modal === null) return
	e.preventDefault()
	modal.style.display = 'none'
	modal.setAttribute('aria-hidden' , 'true')
	modal.removeAttribute('aria-modal')
	modal.removeEventListener('click' , closeModal)
	modal.querySelector('.closeInfo').removeEventListener('click' , closeModal)
	modal.querySelector('.stopModal1').removeEventListener('click' , stopPropagation)
	modal = null
}

const stopPropagation = function(e){
	e.stopPropagation()
}

document.querySelectorAll(".openInfo").forEach(a => {
	a.addEventListener('click' , openModal)
})

window.addEventListener('keydown' , function (e) {
	if (e.key === 'Escape' || e.key === "Esc"){
		closeModal(e)
	}
})

init_modal()