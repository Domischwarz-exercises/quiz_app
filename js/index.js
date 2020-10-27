/////////////////////////////////////////////
// NAVIGATION SINGLE PAGE
const home = document.querySelector('.js-home');
const bookmarksPage = document.querySelector('.js-bookmarks');
const createPage = document.querySelector('.js-create');
const profilePage = document.querySelector('.js-profile');

const headerHome = document.querySelector('.header-home');
const headerBookmarks = document.querySelector('.header-bookmarks');
const headerCreate = document.querySelector('.header-create');
const headerProfile = document.querySelector('.header-profile');

const homeButton = document.querySelector('.home-btn');
const bookmarksButton = document.querySelector('.bookmarks-btn');
const createButton = document.querySelector('.create-btn');
const profileButton = document.querySelector('.profile-btn');

homeButton.addEventListener('click', () => {
  home.classList.remove('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.add('hidden');
  profilePage.classList.add('hidden');
});

bookmarksButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.remove('hidden'); 
  createPage.classList.add('hidden');
  profilePage.classList.add('hidden');
  
  headerHome.classList.add('hidden'); 
  headerBookmarks.classList.remove('hidden');
  headerCreate.classList.add('hidden');
  headerProfile.classList.add('hidden');
});

createButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.remove('hidden');
  profilePage.classList.add('hidden');
  headerBookmarks.classList.add('hidden');
  headerCreate.classList.remove('hidden');
  headerProfile.classList.add('hidden');
});

profileButton.addEventListener('click', () => {
  home.classList.add('hidden');
  bookmarksPage.classList.add('hidden');
  createPage.classList.add('hidden');
  profilePage.classList.remove('hidden');
  headerBookmarks.classList.add('hidden');
  headerCreate.classList.add('hidden');
  headerProfile.classList.remove('hidden');
});



/////////////////////////////////////////////
// BOOKMARK TOGGLE
const questionColor = document.querySelector('.question__content--front')
const toggleBookmark = document.querySelector('.question__content--image')


toggleBookmark.addEventListener('click', () => questionColor.classList.toggle('active'))

/////TEST

/*questionColor.forEach(('question__content--image') => {
  toggleBookmark.addEventListener('click', () => questionColor.classList.toggle('active'))
})
function togglehandler(event) {
  
  event.target.classList.toggle('active')
  console.log(event.target)
}

toggleBookmark.forEach( Element => {
  Element.addEventListener('click', () => questionColor.classList.toggle('active'))
  console.log(Element)  
});

console.log(toggleBookmark) */


/////////////////////////////////////////////
// FLIP CARD ANIMATION
const cards = document.querySelectorAll('.question__content')

function transition() {
  this.classList.toggle('active-flip')
}

cards.forEach((question__content) => {
  question__content.addEventListener('click', transition)
  
})
