/* DROP AREA */
function dropAreaPreventDefault(node) {
    node.addEventListener('dragover', e => e.preventDefault())
}

function receiveDrop(node) {
    node.addEventListener('drop', (e) => {
        e.preventDefault()
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        if (e.target.classList.contains('tablero-drag-drop')) {
            node.appendChild(element);
        } else if (e.target.classList.contains('add-new-card')) {
            let tableroDragDropElement = e.target.parentElement.querySelector('.tablero-drag-drop')
            tableroDragDropElement.appendChild(element);
        } else if (e.target.classList.contains('card')) {
            node.insertBefore(element, e.target);
        } else {
            node.insertBefore(element, e.target.parentElement);
        }

    });
}

export function dropAreaEffect(node) {
    node.addEventListener('dragover', () => {
        node.style.transition = 'all 0.5s ease'
        node.style.boxShadow = '0 -6px 15px -4px var(--color-dark-blue)'
        node.style.transform = 'translateY(5px)';
    })
    node.addEventListener('dragleave', () => {
        node.style.boxShadow = ''
        node.style.transform = '';
    })
    node.addEventListener('dragend', () => {
        node.style.boxShadow = ''
        node.style.transform = '';
    })
    node.addEventListener('drop', () => {
        node.style.boxShadow = ''
        node.style.transform = '';
    })
}

export function prepareDropArea(node) {
    dropAreaPreventDefault(node)
    receiveDrop(node)
}

/* DROP ELEMENT */
export function prepareDragElement(node) {
    node.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        node.style.opacity = '0.1'
        node.style.backgroundColor = 'var(--color-white)'
    });
    node.addEventListener('dragend', () => {
        node.style.opacity = ''
        node.style.backgroundColor = ''
    });
}