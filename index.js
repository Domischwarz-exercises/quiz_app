/////////////////////////////////////////////
// BOOKMARK TOGGLE
const question = document.querySelector('.question__content--front')
const toggleBookmark = document.querySelector('.question__content--image')



toggleBookmark.addEventListener('click', () => question.classList.toggle('active'))


/////////////////////////////////////////////
// FLIP CARD ANIMATION
const cards = document.querySelectorAll('.question__content')

function transition() {
	if (this.classList.contains('active-flip')) {
		this.classList.remove('active-flip')
	} else {
		this.classList.add('active-flip')
	}
}

cards.forEach((question__content) =>
	question__content.addEventListener('click', transition)
)




