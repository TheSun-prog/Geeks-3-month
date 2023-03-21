const tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => item.style.display = 'none')
    tabs.forEach(item => item.classList.remove('tabheader__item_active'))
}

const showTabContent = (item=0) => {
    tabContent[item].style.display = 'block'
    tabs[item].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = event => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')


const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => {
    event.target === modal ? closeModal() : false
}

window.onkeydown = event => event.code === 'Escape' ? closeModal() : false


const deadline = '2023-03-22'

function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date
    const days = Math.floor((time / (1000 * 60 * 60 * 24)))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / (1000 * 60)) % 60 % 24)
    const seconds = Math.floor((time / 1000) % 60 % 60 % 24)

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}


function setClock(element, deadline) {
    const elem = document.querySelector(element)
    const days = elem.querySelector('#days')
    const hours = elem.querySelector('#hours')
    const minutes = elem.querySelector('#minutes')
    const seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)
    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
    }
}

setClock('.timer', deadline)


// ДЗ ПЕРВАЯ ЧАСТЬ

let index = 0

let autoScrollTab = setInterval(() => {
    hideTabContent()
    showTabContent(index)
    if (index === 3) index = 0
    else index++
}, 2000)

// ДЗ ВТОРАЯ ЧАСТЬ

setTimeout(openModal, 10000)

// ДЗ ТРЕТЬЯ ЧАСТЬ

window.onscroll = function() {
    let scrollHeight = document.body.scrollHeight,
        totalHeight = window.scrollY + window.innerHeight
    if (totalHeight >= scrollHeight) openModal()

}
