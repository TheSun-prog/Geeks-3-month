// part1

const innInput = document.querySelector('#innInput'),
    innSumbit = document.querySelector('#innSumbit'),
    innResult = document.querySelector('span')

// ИНН = ПДДММГГГГРНННК
// П - пол, ДДММГГГГ - дата рождения, Р - признак регистрации, ННН - порядковый номер, К - контрольная цифра
const regExp = /^[1-2][0-3]\d[0-1]\d{10}$/

innSumbit.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = 'True'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'False'
        innResult.style.color = 'red'
    }
}


// part2

const box = document.querySelector('.box'),
    block = document.querySelector('.block')
    start = document.querySelector('#startMoving')


const blockMaxPosition = block.offsetWidth - 50


function moveBox(direction='') {
    let status = true
    switch (direction) {

        // Условие при первом вызове функции
        case '': {

            // Проверка позиции Box для дальнейшей работы с ней
            switch (box.offsetLeft) {
                case blockMaxPosition: {
                    direction = 'left'
                    break
                }
                case 0: {
                    direction = 'right'
                    break
                }

                // При не соблюдения условий
                default: {
                    status = false
                    console.log('Unknown Error')
                }
            }
            break
        }

        // Движение Box в левом направлении
        case 'left': {
            if (box.offsetLeft > 0){
                box.style.left = `${box.offsetLeft - 10}px`
            } else {
                status = 0
            }
            break
        }

        // Движение Box в правом направлении
        case 'right': {
            if (box.offsetLeft < blockMaxPosition){
                box.style.left = `${box.offsetLeft + 10}px`
            } else {
                status = 0
            }
            break
        }

        // При неизвестной ошибке
        default: {
            console.log('Unknown Error')
            status = false
        }
    }

    if (status) {
        setTimeout(recursion, 20)
    } else {
        start.style.display = 'block'
    }
    function recursion() {
        moveBox(direction)
    }
}

start.onclick = () => {
    start.style.display = 'none'
    moveBox()
}
