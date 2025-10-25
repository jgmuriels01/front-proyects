import { Product } from "./product.js";

export class Player {

    constructor(name) {
        this.name = name
        this.points = 0
        this.maxHp = 100
        this.hp = 100
        this.inventory = []
        this.attack = 5
        this.defense = 0
        this.src = './IMG/knight.png'
    }

    addPoint(points) {
        this.points += points;
    }

    addHp(hp) {
        this.hp += hp;
        if(hp > this.maxHp){
            this.maxHp = hp
        }
    }

    addAttack(attack) {
        this.attack += attack;
    }

    addDefese(defense) {
        this.defense += defense;
    }
    // Add product to inventory and update stats
    buyProduct(product) {
        if (this.inventory.length <= 6) {
            this.inventory.push(product);
            this.updateStats();
        }

    }

    updateStats() {
        this.inventory.forEach(product => {
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
            console.log(`cambiando stats ${product.type}`)
        });
    }

    showInventory(nodes) {
        for (let i = 0; i < nodes.length && i < this.inventory.length; i++) {
            this.inventory[i].show(nodes[i])
        }
    }

    showStats(node) {
        node.innerHTML = ""
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
