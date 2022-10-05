const notificationsBox = document.querySelectorAll('.non-read')
const redCircle = document.querySelectorAll('.non-read-text')

const number = document.querySelector('#notifications-number')

number.innerText = notificationsBox.length

const markButton = document.querySelector('#mark')

markButton.addEventListener('click', () => {
    notificationsBox.forEach(element => {
        element.classList.remove('non-read')
    });

    redCircle.forEach(element => {
        element.classList.remove('non-read-text')
    });

    number.innerText = 0
})