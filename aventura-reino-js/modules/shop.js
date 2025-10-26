function filterShop(rarity, shop) {
    return shop.filter(product => product.rarity === rarity);
}

export function findProduct(shop, id) {
    return shop.find(product => product.id === id);
}

export function applyDiscount(shop, rarity, discount) {
    filterShop(rarity, shop).forEach(product => product.discount(discount))
}

export function showShop(node, shop){
    shop.forEach(product => {
        /* main node */
        let productElement = document.createElement('div')
        productElement.id = product.id
        /* sub-main node layer */
        let imgElement = document.createElement('img')
        let priceElement = document.createElement('div')
        let comprarElement = document.createElement('button')
        /* sub-main node layer FILL */
        product.showProduct(imgElement)
        priceElement.innerText = `${product.price}$`
        comprarElement.innerText = 'Comprar'
        /* sub-main node layer APPEND */
        productElement.append(imgElement)
        productElement.append(priceElement)
        productElement.append(comprarElement)
        /* main node append */
        node.append(productElement)
    });
}

export function randomRarity(){
    let rarities = ['Common', 'Rare', 'Legendary']
    let random = Math.floor(Math.random()*rarities.length)
    return rarities[random]
}

export function randomDiscount(){
    let random = Math.floor(Math.random() * 95) + 5
    return random
}