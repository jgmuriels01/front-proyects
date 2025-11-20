/**
 * Show a scene chosen by its id,
 * hide others
 * @param {int} id id of scene
 */
export function showScene(id) {
    document.querySelectorAll('.scene').forEach(
        element => element.classList.remove('active')
    );
    document.getElementById(id).classList.add('active');
    console.log(`Switching to scene ${id}`)
}