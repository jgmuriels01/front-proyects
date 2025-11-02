// ArrayBuffer to hexadecimal string
function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

// Hash SHA-256 from a text (meant to be password + salt)
export async function hashText(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return bufferToHex(hashBuffer);
}

// Random salt (16 bytes)
function generateSalt() {
    const saltArray = new Uint8Array(16);
    crypto.getRandomValues(saltArray);
    return bufferToHex(saltArray);
}

// Encrypt password
export async function encryptPassword(password) {
    const salt = generateSalt();
    const hash = await hashText(password + salt);
    return { salt, hash }
}
