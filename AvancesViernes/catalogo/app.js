const cartas = document.querySelectorAll('.card')
const gallery = document.querySelector('.gallery')

cartas.forEach(carta => {

    carta.addEventListener('click', () => {

        window.location = '../Pagina producto/producto.html'
    })
})



const datos = fetch('./productos.json')

.then(data => {

    const datas = data.json()
    return datas
    
}) .then(valor => {
 
    valor.forEach((producto) => {

        const {img, nombre, precio} = producto

        const container = document.createElement('div')
        container.classList.add('card')
    

        const imagenGet = document.createElement('img')
        imagenGet.classList.add('card-img')
        imagenGet.src = `${img}`

        const info = document.createElement('div')
        info.classList.add('card-info')

        const nombreGet = document.createElement('h3')
        nombreGet.textContent = `${nombre}`
        nombreGet.classList.add('card-name')

        const precioGet = document.createElement('p')
        precioGet.textContent = `${precio}`
        precioGet.classList.add('card-price')

        info.appendChild(precioGet)
        info.insertBefore(nombreGet, precioGet)

        container.appendChild(info)
        container.insertBefore(imagenGet, info)
        gallery.appendChild(container)
        
    })
})

