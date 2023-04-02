const content = document.querySelector('.content__inner'),
    cardCountInput = document.querySelector('#cardCount'),
    cardCountBtn = document.querySelector('.cardCountBtn')
    url = 'https://jsonplaceholder.typicode.com/posts'

cardCountBtn.onclick = () => {
    if (cardCountInput.value > 0 && cardCountInput.value < 100) {
        content.innerHTML = '<h2 style="font-size: 60px">Loading...</h2>'
        getReq(cardCountInput.value)
    } else {
        document.querySelector('.error').classList.remove('hide')
        cardCountInput.value = ''
    }
}

const getReq = async(cardCount) => {
    const res = await fetch(url)
    const json = await res.json()
    content.innerHTML = ''

    for (const item of json) {
        if (cardCount <= 0) break
        const num = (Math.random() * 5).toFixed()
        content.innerHTML += `
        <div class="card"> 
            <img src="img/meme${num}.jpeg" alt="meme">
            <h2>${item.title}</h2>
            <p>${item.body}</p>
        </div>
        `
        cardCount--
    }
}
