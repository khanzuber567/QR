
const form = document.querySelector('form')
const input = document.querySelector('input')
const image = document.querySelector('img')
const size = document.querySelector('#size')
// const download = document.querySelector('download')
// const submit = document.querySelector('submit')


 async function getQr(e){
    e.preventDefault()
    const response = await fetch(`http://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
    image.setAttribute("src" , response.url)
    form.reset()
}

form.addEventListener('submit', getQr)

let button = document.querySelector('button')
let ul = document.querySelector('ul')

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
 const data = await response.json()
    data.forEach(item => {
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.innerText = item.title
         ul.appendChild(li)        
    });

}
    button.addEventListener('click', getData)




