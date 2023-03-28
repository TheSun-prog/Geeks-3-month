const usdInput = document.querySelector('#usd'),
    kgsInput = document.querySelector('#kgs'),
    eurInput = document.querySelector('#eur')

const convert = (elem, target1, target2) => {

    elem.oninput = () => {

        const req = new XMLHttpRequest()
        req.open('GET', 'data.json')
        req.setRequestHeader('Content-type', 'application/json')
        setTimeout(() => req.send(), 0)

        req.onload = () => {

            const res = JSON.parse(req.responseText)
            if (elem.value === '') {
                target1.value = 0
                target2.value = 0
            } else {
                //  res['elem.id'-'target1.id'] -> res['usd-kgs']
                target1.value = (elem.value * res[`${elem.id}-${target1.id}`]).toFixed(2)
                target2.value = (target1.value * res[`${target1.id}-${target2.id}`]).toFixed(2)
            }

        }
    }
}

convert(usdInput, kgsInput, eurInput)
convert(eurInput, usdInput, kgsInput)
convert(kgsInput, eurInput, usdInput)


