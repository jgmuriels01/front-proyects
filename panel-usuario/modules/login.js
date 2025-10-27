import { REGEX_USER, REGEX_PASSWORD } from '../utils/regex.js'

function checkUser(user) {
    return REGEX_USER.test(user)
}

export function changeUser(userInput, userMessage) {
    if (checkUser(userInput.value)) {
        userInput.classList.remove('error')
        userMessage.innerHTML = ''
        return true
    } else {
        userInput.classList.add('error')
        userMessage.innerHTML = 'Min 3 character long'
        return false
    }
}

function checkPassword(password) {
    return REGEX_PASSWORD.test(password)
}

export function changePassword(passwordInput, passwordMessage) {
    if (checkPassword(passwordInput.value)) {
        passwordInput.classList.remove('error')
        passwordMessage.innerHTML = ''
        return true
    } else {
        passwordInput.classList.add('error')
        passwordMessage.innerHTML = 'Min 8 character long, upper and lower'
        return false
    }
}

export function validLogin(user, password){
    if(user && password){
        return true
    }else{
        return false
    }
}