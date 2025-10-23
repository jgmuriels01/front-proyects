export class Player {

    constructor(name) {
        this.name = name;
        this.points = 0;
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
        this.inventory.push(deepClone(product));
        this.updateStats();
    }

    updateStats() {
        for (product in this.inventory) {
            switch (product.type) {
                case "weapon":
                    this.addAttack(product.stat);
                    break;
                case "armor":
                    this.addDefese(product.stat);
                    break;
                case "potion":
                    this.addHp(product.stat);
                    break;
            }
        }
    }
}
