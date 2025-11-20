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

    buyProduct(product) {
        if (this.inventory.length < 6) {
            this.inventory.push(product)
            return true
        }
        return false
    }

    removeProduct(productToRemove) {
        this.inventory = this.inventory.filter(product => product !== productToRemove)
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
            let imgElement = document.createElement('img')
            this.inventory[i].showProduct(imgElement)
            nodes[i].innerHTML = ""
            nodes[i].append(imgElement)
        }
    }

    showStats(node) {
        /* restet */
        node.innerHTML = ""
        /* nodes creation*/
        let pointsElement = document.createElement('div')
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        let defenseElement = document.createElement('div')
        /* fill nodes */
        pointsElement.innerText = `Points = ${this.points}`
        hpElement.innerText = `HP = ${this.hp}/${this.maxHp}`
        attackElement.innerText = `Attack = ${this.attack}`
        defenseElement.innerText = `Defense = ${this.defense}`
        /* append nodes */
        node.append(pointsElement)
        node.append(hpElement)
        node.append(attackElement)
        node.append(defenseElement)
    }

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
