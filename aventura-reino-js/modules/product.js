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

    clone() {
        let clone = Object.create(Product.prototype)
        Object.assign(clone, {
            name: this.name,
            price: this.price,
            rarity: this.rarity,
            type: this.type,
            stat: this.stat,
            src: this.src,
            id: this.id
        })
        return clone
    }

    discount(discount) {
        if (discount < 0) { discount = 0 }
        if (discount > 100) { discount = 100 }
        this.price = Math.round(this.price * (1 - (discount / 100)))// No decimals in prices
        if(this.price == 0){
            this.price = 1
        }
    }

    showProduct(img) {
        img.setAttribute('src', this.src)
        img.setAttribute('alt', this.name)
        img.setAttribute('title', this.name)
    }
}
