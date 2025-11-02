export function showScene(id) {
    document.querySelectorAll('section').forEach(
        element => element.classList.remove('active')
    );
    document.getElementById(id).classList.add('active');
}