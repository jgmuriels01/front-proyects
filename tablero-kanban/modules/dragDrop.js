/* const dropzones = document.querySelectorAll(".dropzone");
const item = document.getElementById("item");

item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

dropzones.forEach(zone => {
    // Permitir soltar
    zone.addEventListener('dragover', e => e.preventDefault());
    // Cuando se suelta el elemento
    zone.addEventListener('drop', handleDrop);
});

function handleDrop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const element = document.getElementById(id);
    e.currentTarget.appendChild(element); // e.currentTarget = la zona donde se soltó
} */

/* DROP AREA */
function dropAreaPreventDefault(node) {
    node.addEventListener('dragover', e => e.preventDefault())
}

function receiveDrop(node) {
    node.addEventListener('drop', (e) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        console.log('target:',e.target)
        console.log('currentTarget:',e.currentTarget)
        console.log('element:',element)
        console.log('e:',e)
        if(e.target.classList.contains('card-text')){
            console.log('a')
            node.insertBefore(element, e.target.parentElement);
            
        }else{
            console.log('b')
            node.appendChild(element);
        }
        
    });
}

export function prepareDropArea(node) {
    dropAreaPreventDefault(node)
    receiveDrop(node)
}

/* DROP ELEMENT */
export function prepareDragElement(node) {
    node.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
}