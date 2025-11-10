import { addNewCardListener } from "./modules/creation.js"
import { prepareDropArea, prepareDragElement, dropAreaEffect } from "./modules/dragDrop.js"

let card_id = 1
let hover = null

/* INIT */
let addNewCardElements = document.querySelectorAll('.add-new-card')
addNewCardElements.forEach(e => {
    addNewCardListener(e, e.parentElement)
    prepareDropArea(e)
    dropAreaEffect(e)
})

let tableroDragDropElements = document.querySelectorAll('.tablero-drag-drop')
tableroDragDropElements.forEach(e => prepareDropArea(e))

let tableroElements = document.querySelectorAll('.tablero')
tableroElements.forEach(e => prepareDropArea(e.querySelector('.tablero-drag-drop')))



/* TESTING */
let cardElements = document.querySelectorAll('.card')
cardElements.forEach(e => {
    e.querySelector('.delete-card').addEventListener('click', () => e.remove())
    prepareDragElement(e)
    dropAreaEffect(e)
})

