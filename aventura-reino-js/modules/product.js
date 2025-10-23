export class Product {

    constructor(name, price, rarity, type, stat) {
        this.name = name;
        this.price = price;
        this.rarity = rarity;
        this.type = type;
        this.stat = stat;
    }

    discount(discount) {
        if (discount < 0) { discount = 0 }
        if (discount > 100) { discount = 100 }
        this.price = Math.round(this.price * (discount / 100)) // No decimals in prices
    }
}
