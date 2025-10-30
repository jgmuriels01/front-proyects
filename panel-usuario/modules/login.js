export function checkCredentials(userInput, userMessage, passwordInput, passwordMessage){
    let userObjString = localStorage.getItem(userInput.value)
    let userObj = JSON.parse(userObjString)
    if(passwordInput.value === userObj.password){
        userInput.classList.remove('error')
        userMessage.innerHTML = ''
        passwordInput.classList.remove('error')
        passwordMessage.innerHTML = ''
        return true
    }else{
        userInput.classList.add('error')
        userMessage.innerHTML = 'User not found or password not matching'
        passwordInput.classList.add('error')
        passwordMessage.innerHTML = 'User not found or password not matching'
        return false
    }
}

export function toggleVisibility(visibility, visibilityElement, passwordElement){
    if(visibility){
        passwordElement.setAttribute('type', 'password')
        visibilityElement.innerText = 'visibility_off'
    }else{
        passwordElement.setAttribute('type', 'text')
        visibilityElement.innerText = 'visibility'

    }
    return !visibility
}