const block = document.querySelector('.block'),
    btnPrev = document.querySelector('.prev'),
    btnNext = document.querySelector('.next')

let count = 1

btnNext.onclick = () => {
    block.innerHTML = `<h2>LOADING...</h2>`
    count < 200 ? count++ && sendReq() : block.innerHTML = '<h2>ERROR!</h2>'
    sendReq()
}

btnPrev.onclick = () => {
    block.innerHTML = `<h2>LOADING...</h2>`
    count > 1 ? count-- && sendReq() : block.innerHTML = '<h2>ERROR!</h2>'

}

const sendReq = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(res => res.json())
        .then(json => {
            block.innerHTML = `
            <h2>${json.title}</h2> 
            <span>${json.id}</span>
            <h3>${json.completed}</h3> 
            `
        })
}

sendReq()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => console.log(json))