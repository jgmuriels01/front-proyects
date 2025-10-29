import { checkCredentials, toggleVisibility } from './modules/login.js'
import { showScene } from './utils/scene.js'
import { changeUser, changePassword, changePhone, changePostalCode, changeLegalAge, changeAge, validSignup } from './modules/signup.js'

/* LOGIN */
/* get elements */
let loginScene = document.getElementById('login')
let userLoginElement = loginScene.querySelector('#userLogin')
let passwordLoginElement = loginScene.querySelector('#passwordLogin')
let userMessageElement = loginScene.querySelector('#userMessage')
let passwordMessageElement = loginScene.querySelector('#passwordMessage')
let loginButtonElement = loginScene.querySelector('#loginButton')
let signupLinkElement = loginScene.querySelector('#signupLink')
let visibilityElement = loginScene.querySelector('#loginVisibility')

let visibilityLogin = false;

loginButtonElement.addEventListener('click', () => {
    if (checkCredentials(userLoginElement, userMessageElement, passwordLoginElement, passwordMessageElement)) {
        document.cookie = `user:${userLoginElement.value},max-age=` + 60 * 60 * 24
        showScene('user-panel')
    }
})

visibilityElement.addEventListener('click', () => { visibilityLogin = toggleVisibility(visibilityLogin, visibilityElement, passwordLoginElement) })

signupLinkElement.addEventListener('click', () => showScene('sigup'))


/* SIGNUP */
/* get elements */
let signupScene = document.getElementById('sigup')
let userSignupElement = signupScene.querySelector('#userSignup')
let passwordSignupElement = signupScene.querySelector('#passwordSignup')
let phoneElement = signupScene.querySelector('#phone')
let postalCodeElement = signupScene.querySelector('#postal-code')
let legalAgeElement = signupScene.querySelector('#legal-age')
let ageContainerElement = signupScene.querySelector('#age-container')
let ageElement = signupScene.querySelector('#age')

let signupButtonElement = signupScene.querySelector('#signupButton')
let loginLinkElement = signupScene.querySelector('#loginLink')

let userSignupMessageElement = signupScene.querySelector('#userSignupMessage')
let passwordSignupMessageElement = signupScene.querySelector('#passwordsignupMessage')
let phoneMessageElement = signupScene.querySelector('#phoneMessage')
let postalCodeMessageElement = signupScene.querySelector('#postalCodeMessage')
let legalAgeMessageElement = signupScene.querySelector('#legalAgeMessage')
let ageMessageElement = signupScene.querySelector('#ageMessage')

let usersignupOk = false
let passwordSignupOk = false
let phoneOk = false
let postalCodeOk = false
let legalAgeOk = false
let ageOk = false

userSignupElement.addEventListener('blur', () => {
    usersignupOk = changeUser(userSignupElement, userSignupMessageElement)
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

passwordSignupElement.addEventListener('blur', () => {
    passwordSignupOk = changePassword(passwordSignupElement, passwordSignupMessageElement)
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

phoneElement.addEventListener('blur', () => {
    phoneOk = changePhone(phoneElement, phoneMessageElement)
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

postalCodeElement.addEventListener('blur', () => {
    postalCodeOk = changePostalCode(postalCodeElement, postalCodeMessageElement)
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

legalAgeElement.addEventListener('click', () => {
    legalAgeOk = changeLegalAge(legalAgeElement, legalAgeMessageElement)
    if (legalAgeOk) {
        ageContainerElement.classList.add('active')
    } else {
        ageContainerElement.classList.remove('active')
    }
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

ageElement.addEventListener('blur', () => {
    ageOk = changeAge(ageElement, ageMessageElement)
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        signupButtonElement.disabled = false
    } else {
        signupButtonElement.disabled = true
    }
})

signupButtonElement.addEventListener('click', () => {
    if (validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk)) {
        let user = {
            password: passwordSignupElement.value,
            phone: phoneElement.value,
            postalCode: postalCodeElement.value,
            age: ageElement.value
        }
        localStorage.setItem(userSignupElement.value, JSON.stringify(user))
    }
    let userString = localStorage.getItem(userSignupElement.value)
    let userObj = JSON.parse(userString)
    console.log(userObj.password)
    console.log(userObj.phone)
    console.log(userObj.postalCode)
    console.log(userObj.age)
    showScene('login')
})

loginLinkElement.addEventListener('click', () => showScene('login'))

/* USER PANEL */
let userPanelElement = document.getElementById('user-panel')
let userElement = userPanelElement.querySelector('#user')

document.


