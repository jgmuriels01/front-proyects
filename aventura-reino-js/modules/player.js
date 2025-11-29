import { Product } from "./product.js"

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

    /**
     * Add hp to this Player
     * might increase maxHp
     * @param {int} hp value to increase this.hp
     */
    addHp(hp) {
        this.hp += hp;
        if (this.hp > this.maxHp) {
            this.maxHp = this.hp
        }
    }

    addAttack(attack) {
        this.attack += attack;
    }

    addDefese(defense) {
        this.defense += defense;
    }

    /**
     * Add a product to this.inventory
     * while inventory has less than 6 products
     * @param {Product} product product to be bought
     * @returns true if space in inventory
     */
    buyProduct(product) {
        if (this.inventory.length < 6) {
            this.inventory.push(product)
            return true
        }
        return false
    }

    /**
     * Remove a product from the player's inventory
     * @param {Product} productToRemove product to be removed
     */
    removeProduct(productToRemove) {
        this.inventory = this.inventory.filter(product => product !== productToRemove)
    }

    /**
     * Go throught player inventory and based on item's type
     * add attack, defese or hp
     */
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
        });
    }

    /**
     * Show player inventory in the given list of nodes,
     * meant to be the nodes of the footer inventory.
     * Create img, set its atributes, empty footer inventory node and fill it
     * with the new img.
     * @param {HTMLElement[]} nodes given list of nodes
     */
    showInventory(nodes) {
        for (let i = 0; i < nodes.length && i < this.inventory.length; i++) {
            let imgElement = document.createElement('img')
            this.inventory[i].showProduct(imgElement)
            nodes[i].innerHTML = ""
            nodes[i].append(imgElement)
        }
    }

    /**
     * Show player stats in a given node
     * @param {HTMLElement} node node where to append stats
     */
    showStats(node) {
        /* restet */
        node.innerHTML = ""
        /* nodes creation*/
        let pointsElement = document.createElement('div')
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        let defenseElement = document.createElement('div')
        /* fill nodes */
        pointsElement.innerText = `Puntos = ${this.points}`
        hpElement.innerText = `Vida = ${this.hp}/${this.maxHp}`
        attackElement.innerText = `Ataque = ${this.attack}`
        defenseElement.innerText = `Defensa = ${this.defense}`
        /* append nodes */
        node.append(pointsElement)
        node.append(hpElement)
        node.append(attackElement)
        node.append(defenseElement)
    }

    /**
     * Show player info in a given node
     * @param {HTMLElement} node node where to append player stats
     */
    showPlayer(node) {
        /* get nodes */
        let playerImgElement = node.querySelector('.player-img')
        let playerNameElement = node.querySelector('.player-name')
        let playerStatsElement = node.querySelector('.player-stats')
        /* fill nodes */
        playerImgElement.setAttribute('src', this.src)
        playerNameElement.innerText = this.name
        this.showStats(playerStatsElement)
    }
}
