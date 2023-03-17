// both 
// ДО 97 СТРОКИ ЭТО СОВМЕЩЕННОЕ ДЗ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (! - для того, чтобы заметили это сообщение)

// HTML elements
const boxMain = document.querySelector('.boxMain'),
    areaMain = document.querySelector('.blockMain')
    button = document.querySelector('#action')


// Required parametres
const stepSize = 1,
    stepTime = 1,
    areaBorderX = areaMain.offsetWidth - boxMain.offsetWidth,
    areaBorderY = areaMain.offsetHeight - boxMain.offsetHeight
let positionX = 0,
    positionY = 0,
    lastAction


// Actions
const moveRight = () => {
    lastAction = setInterval(() => {
        if (positionX < areaBorderX) {
            positionX += stepSize
            boxMain.style.left = `${positionX}px`
        } else {
            clearInterval(lastAction)
            moveBottom()
        }
    }, stepTime)
},
    moveBottom = () => {
    lastAction = setInterval(() => {
        if (positionY < areaBorderX) {
            positionY += stepSize
            boxMain.style.top = `${positionY}px`
        } else {
            clearInterval(lastAction)
            moveLeft()
        }
    }, stepTime)
},
    moveLeft = () => {
    lastAction = setInterval(() => {
        if (positionX > 0) {
            positionX -= stepSize
            boxMain.style.left = `${positionX}px`
        } else {
            clearInterval(lastAction)
            moveTop()
        }
    }, stepTime)
},
    moveTop = () => {
    lastAction = setInterval(() => {
        if (positionY > 0) {
            positionY -= stepSize
            boxMain.style.top = `${positionY}px`
        } else {
            clearInterval(lastAction)
            moveRight()
        }
    }, stepTime)
}


// Moving boxMain
const move = () => {
    if (positionY === 0) moveRight()
    else if (positionX === areaBorderX) moveBottom()
    else if (positionY === areaBorderY) moveLeft()
    else if (positionX === 0) moveTop()
    else console.error('Move function error')
},

// Stop moving boxMain
    stop = () => {
        clearInterval(lastAction)
    }


// On click functions
button.onclick = () => {
    if (button.innerText === 'Move') {
        move()
        button.innerText = 'Stop'
    } else if (button.innerText === 'Stop') {
        stop()
        button.innerText = 'Move'
    } else {
        console.error('Button error')
    }
}



// part1

const box = document.querySelector('.box1')
let posX = 0,
    posY = 0

setInterval(() => {
    if (posX < 450 && posY === 0) {
        posX++
        box.style.left = `${posX}px`
    } else if (posY < 450 && posX === 450) {
        posY++
        box.style.top = `${posY}px`
    } else if (posX > 0 && posY === 450) {
        posX--
        box.style.left = `${posX}px`
    } else if (posY > 0 && posX === 0) {
        posY--
        box.style.top = `${posY}px`
    }
}, 1)


// part2

const counter = document.querySelector('.counter'),
    startCount = document.querySelector('.startCount'),
    stopCount = document.querySelector('.stopCount')
let num = Number(counter.innerHTML),
    addNumInterval,
    status = true


startCount.onclick = () => {
    if (status) {
        counter.style.color = 'green'
        addNumInterval = setInterval(() => {
            num++
            counter.innerHTML = `${num}`
        }, 1000)
        status = false
    }
}
stopCount.onclick = () => {
    if (addNumInterval) {
        counter.style.color = 'red'
        counter.innerHTML = `${num}`
        clearInterval(addNumInterval)
        status = true
    }
}
