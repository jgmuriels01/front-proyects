import { addNewCardListener } from "./modules/creation.js"

/* INIT */
let addNewCardElements = document.querySelectorAll('.add-new-card')
addNewCardElements.forEach(e => addNewCardListener(e, e.parentElement))

let cardElements = document.querySelectorAll('.card')
cardElements.forEach(e => e.querySelector('.delete-card').addEventListener('click', () => e.remove()))