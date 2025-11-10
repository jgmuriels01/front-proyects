import { addNewCardListener } from "./modules/creation.js"
import { prepareDropArea, prepareDragElement } from "./modules/dragDrop.js"

let card_id = 1
let hover = null

/* INIT */
let addNewCardElements = document.querySelectorAll('.add-new-card')
addNewCardElements.forEach(e => addNewCardListener(e, e.parentElement))

let tableroElements = document.querySelectorAll('.tablero-drag-drop')
tableroElements.forEach(e => prepareDropArea(e))

/* TESTING */
let cardElements = document.querySelectorAll('.card')
cardElements.forEach(e => {
    e.querySelector('.delete-card').addEventListener('click', () => e.remove())
    prepareDragElement(e)
})

