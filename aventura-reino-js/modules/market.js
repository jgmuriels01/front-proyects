export function filterMarket(rarity, market) {
    return market.filter(product => product.rarity === rarity);
}

export function findProduct(market, name) {
    return market.find(product => product.name.toLowerCase() === name.toLowerCase());
}

export function applyDiscount(market, rarity, discount) {
    market.forEach(product => {
        if (product.rarity === rarity) {
            product.discount(discount);
        }
    })
}

