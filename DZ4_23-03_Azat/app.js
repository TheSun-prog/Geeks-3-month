const block = document.querySelector('.block')

const req = new XMLHttpRequest()
req.open('GET', 'peoples.json')
req.setRequestHeader("Content-type", "application/json")
req.send()

req.onload = event => {
    const data = JSON.parse(req.response)
    for (let el in data) {
        block.innerHTML +=
`<div class="card">
    <h2>${el}</h2>
    <span class="personName">Name: ${data[el].name}</span>
    <span class="personAge">Age: ${data[el].age}</span>
</div>`
    }
}