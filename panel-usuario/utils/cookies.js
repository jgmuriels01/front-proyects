

// Get a cookies as list, clean spaces
function getCookies() {
    return document.cookie.split(";").map(c => c.trim());
}

// Get cookie value
export function getCookie(cookieName) {
    let cookies = getCookies()
    try {
        let cookie = cookies.find(c => c.trim().split('=')[0] === cookieName)
        console.log(`cookie ${cookieName} encontrada`)
        return cookie.split('=')[1]
    } catch (error) {
        console.log(`cookie ${cookieName} NO encontrada`)
        return ""
    }
}

export function cookieExist(cookieName){
    let cookie = getCookies().find(c => c.trim().split('=')[0] === cookieName)
    if(cookie == null){
        return false
    }else{
        return true
    }
}

export function deleteCookie(cookieName){
    document.cookie = `${cookieName}=; max-age=0`
}

// Add seconds to a cookie
export function cookieSetMaxAge(cookieName, seconds) {
    document.cookie = cookieName + "=" + getCookie(cookieName) + "; max-age=" + seconds;
}