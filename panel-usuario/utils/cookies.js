

// Get a cookies as list, clean spaces
export function getCookies() {
    return document.cookie.split(";").map(c => c.trim());
}

// Get cookie value
export function getCookie(cookieName) {
    let cookies = getCookies()
    try {
        let cookie = cookies.find(c => c.split('=')[0] === cookieName)
        return cookie.split('=')[1]
    } catch (error) {
        return ""
    }
}

// Add seconds to a cookie
export function cookieSetMaxAge(cookieName, seconds) {
    document.cookie = cookieName + "=" + getCookie(cookieName) + "; max-age=" + seconds;
}