import { checkCredentials, toggleVisibility,} from './modules/login.js'
import { showScene } from './utils/scene.js'
import { resetUser, changeUser, resetPassword, changePassword, resetPhone, changePhone, resetPostalCode, changePostalCode, resetLegalAge, changeLegalAge, resetAge, changeAge, validSignup } from './modules/signup.js'
import { getCookie, cookieSetMaxAge, deleteCookie, cookieExist } from './utils/cookies.js'

/* elements LOGIN */
let loginScene = document.getElementById('login')
let userLoginElement = loginScene.querySelector('#userLogin')
let passwordLoginElement = loginScene.querySelector('#passwordLogin')
let visibilityLoginElement = loginScene.querySelector('#visibilityLogin')
let userMessageElement = loginScene.querySelector('#userMessage')
let passwordMessageElement = loginScene.querySelector('#passwordMessage')
let loginButtonElement = loginScene.querySelector('#loginButton')
let signupLinkElement = loginScene.querySelector('#signupLink')

let visibilityLogin = false;

/* elements SIGNUP */
let signupScene = document.getElementById('sigup')
let userSignupElement = signupScene.querySelector('#userSignup')
let passwordSignupElement = signupScene.querySelector('#passwordSignup')
let visibilitySignupElement = signupScene.querySelector('#visibilitySignup')
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
let visibilitySignup = false;
let phoneOk = false
let postalCodeOk = false
let legalAgeOk = false
let ageOk = false

/* elements USER PANEL */
let userPanelElement = document.getElementById('user-panel')
let userElement = userPanelElement.querySelector('#user')
let themeElement = userPanelElement.querySelector('#theme')
let signoutElement = userPanelElement.querySelector('#signout')

let darkMode = true

/* elements FOOTER */
let acceptCookiesContainerElement = document.getElementById('accept-cookies-container')
let acceptCookiesElement = acceptCookiesContainerElement.querySelector('#acceptCookies')
acceptCookiesElement = document.getElementById('acceptCookies')

/* INICIALIZATION */
if (cookieExist('acceptCookies')) {
    acceptCookiesContainerElement.classList.remove('active')
} else {
    acceptCookiesContainerElement.classList.add('active')
}
if (cookieExist('user')) {
    userElement.innerText = getCookie('user')
    showScene('user-panel')
} else {
    showScene('login')
}
if (cookieExist('theme') && getCookie('theme') === 'light') {
    document.body.classList.remove('dark-mode')
}

/* LOGIN */
loginButtonElement.addEventListener('click', () => {
    if (checkCredentials(userLoginElement, userMessageElement, passwordLoginElement, passwordMessageElement)) {
        document.cookie = `user=${userLoginElement.value}`
        cookieSetMaxAge('user', 60 * 60 * 24)
        userElement.innerText = getCookie('user')
        showScene('user-panel')
    }
})

visibilityLoginElement.addEventListener('click', () => { visibilityLogin = toggleVisibility(visibilityLogin, visibilityLoginElement, passwordLoginElement) })

signupLinkElement.addEventListener('click', () => {
    showScene('sigup')
    resetUser(userSignupElement, userSignupMessageElement)
    resetPassword(passwordSignupElement, passwordSignupMessageElement, visibilitySignupElement, visibilitySignup)
    resetPhone(phoneElement, phoneMessageElement)
    resetPostalCode(postalCodeElement, postalCodeMessageElement)
    resetLegalAge(legalAgeElement, legalAgeMessageElement)
    ageContainerElement.classList.remove('active')
    resetAge(ageElement, ageMessageElement)
})

/* SIGN UP */
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
        ageElement.value = ""
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
    showScene('login')
})

visibilitySignupElement.addEventListener('click', () => { visibilitySignup = toggleVisibility(visibilitySignup, visibilitySignupElement, passwordSignupElement) })
loginLinkElement.addEventListener('click', () => {
    resetUser(userLoginElement, userMessageElement)
    resetPassword(passwordLoginElement, passwordMessageElement, visibilityLoginElement, visibilityLogin)
    showScene('login')
})

/* USER PANEL */
signoutElement.addEventListener('click', () => {
    deleteCookie('user')
    resetUser(userLoginElement, userMessageElement)
    resetPassword(passwordLoginElement, passwordMessageElement, visibilityLoginElement, visibilityLogin)
    showScene("login")
})

themeElement.addEventListener('click', () => {
    if (darkMode) {
        document.body.classList.remove('dark-mode')
        darkMode = false
        document.cookie = `theme=light;max-age=${60 * 60 * 24}`
    } else {
        document.body.classList.add('dark-mode')
        darkMode = true
        document.cookie = `theme=dark;max-age=${60 * 60 * 24}`
    }
})

/* FOOTER */
acceptCookiesElement.addEventListener('click', () => {
    document.cookie = `acceptCookies=true`
    cookieSetMaxAge('acceptCookies', 60 * 60 * 24)
    acceptCookiesContainerElement.classList.remove('active')
})



