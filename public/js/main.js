const socket = io()

const btn = document.querySelector('a.btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    socket.emit('send', socket.id)
})


socket.on('response', (id)=>{
    let li = document.createElement('div')
    li.classList.add('li')
    li.innerHTML = `User with id ${id} send request.`
    document.querySelector('.log').appendChild(li)
})