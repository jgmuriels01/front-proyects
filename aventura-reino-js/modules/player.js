export class Player {

    constructor(name) {
        this.name = name;
        this.points = 0;
        this.maxHp = 100;
        this.hp = 100;
        this.inventory = [];
        this.attack = 5;
        this.defense = 0;
    }

    addPoint(points) {
        this.points += points;
    }

    addHp(hp) {
        this.hp += hp;
    }

    addAttack(attack) {
        this.attack += attack;
    }

    addDefese(defense) {
        this.hp += defense;
    }
    // Add product to inventory and update stats
    buyProduct(product) {
        this.inventory.push(product);
        this.updateStats();
    }

    updateStats() {
        for (let product in this.inventory) {
            switch (product.type) {
                case "Weapon":
                    this.addAttack(product.stat);
                    break;
                case "Armor":
                    this.addDefese(product.stat);
                    break;
                case "Potion":
                    this.addHp(product.stat);
                    break;
            }
        }
    }

    showInventory(nodes) {
        for (let i = 0; i < nodes.length && i < this.inventory.length; i++) {
            this.inventory[i].show(nodes[i])
        }
    }

    showStats(node) {
        let pointsElement = document.createElement('div')
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        let defenseElement = document.createElement('div')
        pointsElement.innerText = `Points = ${this.points}`
        hpElement.innerText = `HP = ${this.hp}/${this.maxHp}`
        attackElement.innerText = `Attack = ${this.attack}`
        defenseElement.innerText = `Defense = ${this.defense}`
        node.append(pointsElement)
        node.append(hpElement)
        node.append(attackElement)
        node.append(defenseElement)
    }
}
