import { hashText } from "../utils/password.js"

export async function checkCredentials(userInput, userMessage, passwordInput, passwordMessage) {
    let userObjString = localStorage.getItem(userInput.value)
    if (userObjString != null) {
        let userObj = JSON.parse(userObjString)
        if (await hashText(passwordInput.value + userObj.password.salt) === userObj.password.hash) {
            userInput.classList.remove('error')
            userMessage.innerHTML = ''
            passwordInput.classList.remove('error')
            passwordMessage.innerHTML = ''
            return true
        }
    }
    userInput.classList.add('error')
    userInput.value = ""
    userMessage.innerHTML = 'User not found or password not matching'
    passwordInput.classList.add('error')
    passwordInput.value = ""
    passwordMessage.innerHTML = 'User not found or password not matching'
    return false
}

export function toggleVisibility(visibility, visibilityElement, passwordElement) {
    if (visibility) {
        passwordElement.setAttribute('type', 'password')
        visibilityElement.innerText = 'visibility_off'
    } else {
        passwordElement.setAttribute('type', 'text')
        visibilityElement.innerText = 'visibility'

    }
    return !visibility
}
