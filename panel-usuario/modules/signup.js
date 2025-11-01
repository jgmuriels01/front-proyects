import { REGEX_USER, REGEX_PASSWORD, REGEX_PHONE, REGEX_POSTAL_CODE } from '../utils/regex.js'

function checkUser(user) {
    return REGEX_USER.test(user)
}

function checkUserExist(user) {
    if (localStorage.getItem(user) == null) {
        return true
    } else {
        return false
    }
}

export function resetUser(userInput, userMessage) {
    userInput.value = ""
    userInput.classList.remove('error')
    userMessage.innerHTML = ''
}

export function changeUser(userInput, userMessage) {
    if (checkUser(userInput.value) && checkUserExist(userInput.value)) {
        userInput.classList.remove('error')
        userMessage.innerHTML = ''
        return true
    } else if (checkUserExist(userInput.value)) {
        userInput.classList.add('error')
        userMessage.innerHTML = 'Min 3 character long'
        return false
    } else {
        userInput.classList.add('error')
        userMessage.innerHTML = 'User already exist'
        return false
    }
}

function checkPassword(password) {
    return REGEX_PASSWORD.test(password)
}

export function resetPassword(passwordInput, passwordMessage) {
    passwordInput.value = ""
    passwordInput.classList.remove('error')
    passwordMessage.innerHTML = ''
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

function checkPhone(phone) {
    return REGEX_PHONE.test(phone)
}

export function resetPhone(phoneInput, phoneMessage) {
    phoneInput.value = ""
    phoneInput.classList.remove('error')
    phoneMessage.innerHTML = ''
}

export function changePhone(phoneInput, phoneMessage) {
    if (checkPhone(phoneInput.value)) {
        phoneInput.classList.remove('error')
        phoneMessage.innerHTML = ''
        return true
    } else {
        phoneInput.classList.add('error')
        phoneMessage.innerHTML = 'Exatcly 9 digits'
        return false
    }
}

function checkPostalCode(postalCode) {
    return REGEX_POSTAL_CODE.test(postalCode)
}

export function resetPostalCode(postalCodeInput, postalCodeMessage) {
    postalCodeInput.value = ""
    postalCodeInput.classList.remove('error')
    postalCodeMessage.innerHTML = ''
}

export function changePostalCode(postalCodeInput, postalCodeMessage) {
    if (checkPostalCode(postalCodeInput.value)) {
        postalCodeInput.classList.remove('error')
        postalCodeMessage.innerHTML = ''
        return true
    } else {
        postalCodeInput.classList.add('error')
        postalCodeMessage.innerHTML = 'Exatcly 5 digits'
        return false
    }
}

export function resetLegalAge(legalAgeInput, legalAgeMessage) {
    legalAgeInput.checked = false
    legalAgeInput.classList.remove('error')
    legalAgeMessage.innerHTML = ''
}

export function changeLegalAge(legalAgeInput, legalAgeMessage) {
    if (legalAgeInput.checked) {
        legalAgeInput.classList.remove('error')
        legalAgeMessage.innerHTML = ''
        return true
    } else {
        legalAgeInput.classList.add('error')
        legalAgeMessage.innerHTML = 'Not allowed under 18'
        return false
    }
}

export function resetAge(ageInput, ageMessage) {
    ageInput.value = ""
    ageInput.classList.remove('error')
    ageMessage.innerHTML = ''
}

export function changeAge(ageInput, ageMessage) {
    if (ageInput.value >= 18 && ageInput.value <= 100) {
        ageInput.classList.remove('error')
        ageMessage.innerHTML = ''
        return true
    } else {
        ageInput.classList.add('error')
        ageMessage.innerHTML = 'Age between 18 and 99'
        return false
    }
}

export function validSignup(usersignupOk, passwordSignupOk, phoneOk, postalCodeOk, legalAgeOk, ageOk) {
    return usersignupOk && passwordSignupOk && phoneOk && postalCodeOk && legalAgeOk && ageOk
}
