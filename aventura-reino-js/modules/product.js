export class Product {

    static globalId = 0;

    constructor(name, price, rarity, type, stat, src) {
        this.name = name;
        this.price = price / 100;
        this.rarity = rarity;
        this.type = type;
        this.stat = stat;
        this.src = src;
        Product.globalId++
        this.id = `producto-${Product.globalId}`
    }

    /**
     * Clone all fields of a Product to store them
     * @returns the clone
     */
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

    /**
     * Apply a discount to this product price.
     * Force discount to be between 0 and 100
     * @param {int} discount provided discount
     */
    discount(discount) {
        if (discount < 0) { discount = 0 }
        if (discount > 100) { discount = 100 }
        this.price = Math.round(this.price * (1 - discount / 100) * 100) / 100
        if (this.price == 0) {
            this.price = 1
        }
    }

    /**
     * Fill atributes of a img with this Product fields
     * @param {HTMLElement} img 
     */
    showProduct(img) {
        img.setAttribute('src', this.src)
        img.setAttribute('alt', this.name)
        img.setAttribute('title', this.name)
    }
}
