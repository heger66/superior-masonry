const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width

console.log(slideWidth)

// Arrange the slides next to one another
slides[0].style.left = slideWidth * 0 + 'px'
slides[1].style.left = slideWidth + 'px'
slides[2].style.left = slideWidth * 2 + 'px'
//slides[1].style.left = '200px'
// When I click left move slides to the left
// When I click right move slides to the right
// When I click the indicators move to that slide


