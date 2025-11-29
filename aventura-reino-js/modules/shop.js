import { Product } from "./product.js";

/**
 * Filter a shop by a given rarity
 * @param {String} rarity rarity to filter
 * @param {Product[]} shop list to be filtered
 * @returns shop with products which match the ratity
 */
function filterShop(rarity, shop) {
    return shop.filter(product => product.rarity === rarity);
}

/**
 * Find a product in a list by its id
 * @param {Product[]} shop collection of Product
 * @param {int} id id of Product
 * @returns product
 */
export function findProduct(shop, id) {
    return shop.find(product => product.id === id);
}

/**
 * Apply a discount to all products of a collection
 * @param {Product[]} shop collection of Product
 * @param {String} rarity rarity to filter Product
 * @param {int} discount discount to apply to Product price
 */
export function applyDiscount(shop, rarity, discount) {
    filterShop(rarity, shop).forEach(product => product.discount(discount))
}

/**
 * Show a show with all its products in a node
 * @param {HTMLElement} node node where to append shop
 * @param {Product[]} shop collection of Product
 */
export function showShop(node, shop) {
    shop.forEach(product => {
        /* main node */
        let productElement = document.createElement('div')
        productElement.id = product.id
        /* sub-main node layer */
        let imgElement = document.createElement('img')
        let statsElement = document.createElement('div')
        let priceElement = document.createElement('div')
        let comprarElement = document.createElement('button')
        /* sub-main node layer FILL */
        product.showProduct(imgElement)
        switch (product.type) {
                case "Weapon":
                    statsElement.innerText = `Ataque: ${(product.stat)}`
                    break;
                case "Armor":
                    statsElement.innerText = `Defensa: ${(product.stat)}`
                    break;
                case "Potion":
                    statsElement.innerText = `Vida: ${(product.stat)}`
                    break;
            }
        priceElement.innerText = `${(product.price).toFixed(2)}$`
        comprarElement.innerText = 'Comprar'
        /* sub-main node layer APPEND */
        productElement.append(imgElement)
        productElement.append(statsElement)
        productElement.append(priceElement)
        productElement.append(comprarElement)
        /* main node append */
        node.append(productElement)
    });
}

/**
 * Choose a random rarity
 * @returns random rarity
 */
export function randomRarity() {
    let rarities = ['Common', 'Rare', 'Legendary']
    let random = Math.floor(Math.random() * rarities.length)
    return rarities[random]
}

/**
 * Provide a random int between 5 and 95
 * @returns random int
 */
export function randomDiscount() {
    let random = Math.floor(Math.random() * (95 - 5 + 1)) + 5
    return random
}