/* ADD NEW CARD */
/* create a container to add a new card,
add listener to on click be replaced by the container
of creating a new card */
function createAddNewCard(parent) {
    let addNewCardElement = document.createElement('div')
    addNewCardElement.classList.add('add-new-card')
    addNewCardElement.innerText = '+ Añade una tarjeta'
    addNewCardListener(addNewCardElement, parent)
    return addNewCardElement
}

/* add listener to be replace on click for a container
to add a new card */
export function addNewCardListener(node, parent) {
    node.addEventListener('click', () => {
        node.replaceWith(createNewCard(parent))
    })
}

/* NEW CARD */
/* create the container to create a new card and
add two listeners*/
function createNewCard(parent) {
    let newCardElement = document.createElement('div')
    newCardElement.classList.add('new-card')
    /* new-card-title */
    let textareaElement = document.createElement('textarea')
    textareaElement.classList.add('new-card-title')
    textareaElement.placeholder = 'Introduce un título aquí'
    newCardElement.append(textareaElement)
    /* new-card-footer */
    let newCardFooterElement = document.createElement('div')
    newCardFooterElement.classList.add('new-card-footer')
    /* save-new-card & cancel-new-card*/
    let saveNewCardElement = document.createElement('button')
    saveNewCardElement.classList.add('save-new-card')
    saveNewCardElement.innerText = 'Añadir tarjeta'
    newCardFooterElement.append(saveNewCardElement)
    let cancelNewCardElement = document.createElement('span')
    cancelNewCardElement.classList.add('cancel-new-card')
    cancelNewCardElement.classList.add('material-symbols-outlined')
    cancelNewCardElement.innerText = 'close'
    newCardFooterElement.append(cancelNewCardElement)
    /* new-card-footer append */
    newCardElement.append(newCardFooterElement)
    newCardListeners(newCardElement, parent)
    return newCardElement
}

/* add two events:
- on click, save: create card and container to add a new card
- on click, cancel: transform create card container back to add new card */
function newCardListeners(node, parent) {
    let textareaElement = node.querySelector('textarea')
    let saveNewCardElement = node.querySelector('.save-new-card')
    saveNewCardElement.addEventListener('click', () => {
        node.replaceWith(createCard(textareaElement.value))
        parent.append(createAddNewCard(parent)) /* cant append before node exist in the DOM !!! */
    })
    let cancelNewCardElement = node.querySelector('.cancel-new-card')
    cancelNewCardElement.addEventListener('click', () => {
        node.replaceWith(createAddNewCard(parent))
    })
}

/* CARD */
/* create a card and add listener to remove it*/
function createCard(text) {
    let cardElement = document.createElement('div')
    cardElement.classList.add('card')
    /* card-text & delete-card */
    let cardTextElement = document.createElement('div')
    cardTextElement.classList.add('card-text')
    cardTextElement.innerHTML = text
    cardElement.append(cardTextElement)
    let deleteCardElement = document.createElement('span')
    deleteCardElement.classList.add('delete-card')
    deleteCardElement.classList.add('material-symbols-outlined')
    deleteCardElement.innerText = 'close'
    deleteCardElement.addEventListener('click', () => cardElement.remove())
    cardElement.append(deleteCardElement)
    return cardElement
}
