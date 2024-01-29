const login = document.querySelector(".login-link")
const register = document.querySelector(".register-link")
const contenido = document.querySelector(".contenido")
const contenido2 = document.querySelector(".contenido2")
const contenido3 = document.querySelector(".contenido3")
const btnLogin = document.querySelector("#btn-login")


const contenedorRegister = document.querySelector(".register")
const contenedorLogin = document.querySelector(".login")


login.addEventListener("click", mostrarLogin)
register.addEventListener("click", mostrarRegister)

/* btnLogin.addEventListener("click", ()=>{
    window.location = "../UserPage/index.html"
}) */

function mostrarRegister(){

    contenedorLogin.style.display = "none"
    contenido3.style.display = "flex"
    setTimeout(()=>{
        contenido3.style.display = "none"
    }, 1000)
    contenedorRegister.classList.add("active")
    const  wrapper = contenedorLogin.parentElement
    wrapper.style.justifyContent = "flex-end"
    contenedorRegister.style.display = "block"
    wrapper.children[0].style.display = "none"
    wrapper.children[1].style.display = "block"
    contenido.style.display = "none"
    contenido2.style.display = "block"
 
}

function mostrarLogin(){
    contenedorRegister.style.display = "none"
    contenido3.style.display = "flex"
    setTimeout(()=>{
        contenido3.style.display = "none"
    }, 1000)
    const  wrapper = contenedorRegister.parentElement
    wrapper.style.justifyContent = "flex-start"
    contenedorLogin.style.display = "block"
    wrapper.children[0].style.display = "block"
    wrapper.children[1].style.display = "none"
    contenido.style.display = "block"
    contenido2.style.display = "none"
}

