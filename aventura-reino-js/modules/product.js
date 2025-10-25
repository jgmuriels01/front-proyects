export class Product {

    static globalId = 0;

    constructor(name, price, rarity, type, stat, src) {
        this.name = name;
        this.price = price;
        this.rarity = rarity;
        this.type = type;
        this.stat = stat;
        this.src = src;
        Product.globalId++
        this.id = `producto-${Product.globalId}`
    }

    discount(discount) {
        if (discount < 0) { discount = 0 }
        if (discount > 100) { discount = 100 }
        this.price = Math.round(this.price * (discount / 100)) // No decimals in prices
    }

    showProduct(img){
        img.setAttribute('src',this.src)
        img.setAttribute('alt',this.name)
        img.setAttribute('title',this.name)
    }
}
