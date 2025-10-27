import { changeUser, changePassword, validLogin } from './modules/login.js'

/* LOGIN */
/* get elements */
let loginScene = document.getElementById('login')
let userElement = loginScene.querySelector('#userLogin')
let passwordElement = loginScene.querySelector('#passwordLogin')
let userMessageElement = loginScene.querySelector('#userMessage')
let passwordMessageElement = loginScene.querySelector('#passwordMessage')
let loginButtonElement = loginScene.querySelector('#loginButton')
let signupLinkElement = loginScene.querySelector('#signupLink')

let userLoginOk = false
let passwordLoginOk = false

userElement.addEventListener('blur', () => {
    userLoginOk = changeUser(userElement, userMessageElement)
    if(validLogin(userLoginOk, passwordLoginOk)){
        loginButtonElement.disabled = false
    }else{
        loginButtonElement.disabled = true
    }
})

passwordElement.addEventListener('blur', () => {
    passwordLoginOk = changePassword(passwordElement, passwordMessageElement)
    if(validLogin(userLoginOk, passwordLoginOk)){
        loginButtonElement.disabled = false
    }else{
        loginButtonElement.disabled = true
    }
})