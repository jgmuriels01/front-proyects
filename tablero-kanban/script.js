import { addNewCardListener } from "./modules/creation.js"
import { prepareDropArea, prepareDragElement } from "./modules/dragDrop.js"

let card_id = 1
let hover = null

/* INIT */
let addNewCardElements = document.querySelectorAll('.add-new-card')
addNewCardElements.forEach(e => addNewCardListener(e, e.parentElement))

let tableroDragDropElements = document.querySelectorAll('.tablero-drag-drop')
tableroDragDropElements.forEach(e => prepareDropArea(e))

let tableroElements = document.querySelectorAll('.tablero')
tableroElements.forEach(e => prepareDropArea(e.querySelector('.tablero-drag-drop')))



/* TESTING */
let cardElements = document.querySelectorAll('.card')
cardElements.forEach(e => {
    e.querySelector('.delete-card').addEventListener('click', () => e.remove())
    prepareDragElement(e)
    e.addEventListener('dragover', () => e.style.border = '2px solid red')
    e.addEventListener('dragleave', () => e.style.border = '')
    e.addEventListener('dragend', () => e.style.border = '')
})

tableroDragDropElements.forEach(e => {
    e.addEventListener('dragover', () => e.style.border = '2px solid red')
    e.addEventListener('dragleave', () => e.style.border = '')
})

