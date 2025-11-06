import { createNewCard, addNewCardListener } from "./modules/creation.js"

let addNewCardElements = document.querySelectorAll('.add-new-card')
/* addNewCardElements.forEach(e => e.addEventListener('click', () => {
    e.replaceWith(createNewCard())
})) */
addNewCardElements.forEach(e => addNewCardListener(e))