export function filterShop(rarity, shop) {
    return shop.filter(product => product.rarity === rarity);
}

export function findProduct(shop, name) {
    return shop.find(product => product.name.toLowerCase() === name.toLowerCase());
}

export function applyDiscount(shop, rarity, discount) {
    filterMarket(rarity, shop).forEach(product => product.discount(discount))
}

export function showShop(shop, node){
    shop.forEach(product => {
        let productElement = document.createElement('div')
        let imgElement = document.createElement('img')
        let priceElement = document.createElement('div')
        let comprarElement = document.createElement('button')
        product.show(imgElement)
        priceElement.innerText = `${product.price} $`
        comprarElement.innerText = 'Comprar'
        productElement.append(imgElement)
        productElement.append(priceElement)
        productElement.append(comprarElement)
        node.append(productElement)
    });
}