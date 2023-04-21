const ratingContainer = document.querySelector('.rating-container')
const feedbackContainer = document.querySelector('.feedback-container')
const circleButtons = document.querySelectorAll('.circle')
const submitButton = document.querySelector('.submit')
const rating = document.querySelector('span')

submitButton.addEventListener('click', () => {
    feedbackContainer.classList.remove('hidden')
    ratingContainer.style.display = 'none'
})

circleButtons.forEach((circleButton) => {
    circleButton.addEventListener('click', () => {
        rating.innerText = circleButton.innerText
    })
})