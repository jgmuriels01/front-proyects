export class Enemy {

    constructor(name, hp, attack, src) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.src = src

    }

    /**
     * Append this Enemy's info to a node
     * @param {HTMLElement} node 
     */
    showEnemy(node) {
        /* main node */
        let enemyElement = document.createElement('div')
        /* fist node layer*/
        let imgNameElement = document.createElement('div')
        let statsElement = document.createElement('div')
        /* img and name node layer */
        let imgElement = document.createElement('img')
        let nameElement = document.createElement('div')
        imgElement.setAttribute("src", this.src)
        nameElement.innerText = this.name
        imgNameElement.appendChild(imgElement)
        imgNameElement.appendChild(nameElement)
        /* stats node layer */
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        hpElement.innerText = `Vida = ${this.hp}`
        attackElement.innerText = `Ataque = ${this.attack}`
        statsElement.appendChild(hpElement)
        statsElement.appendChild(attackElement)
        /* first node layer appends */
        enemyElement.appendChild(imgNameElement)
        enemyElement.appendChild(statsElement)
        /* main node append */
        node.appendChild(enemyElement)
    }
}

export class FinalBoss extends Enemy {

    constructor(name, hp, attack, specialSkill, src) {
        super(name, hp, attack)
        this.attack = attack
        this.specialSkill = specialSkill
        this.multiplierDamage = 1.2
        this.src = src
    }

    /**
     * Append this FinalBoss' info to a node
     * @param {HTMLElement} node 
     */
    showEnemy(node) {
        /* main node */
        let enemyElement = document.createElement('div')
        /* fist node layer*/
        let imgNameElement = document.createElement('div')
        let statsElement = document.createElement('div')
        /* img and name node layer */
        let imgElement = document.createElement('img')
        let nameElement = document.createElement('div')
        imgElement.setAttribute("src", this.src)
        nameElement.innerText = this.name
        imgNameElement.appendChild(imgElement)
        imgNameElement.appendChild(nameElement)
        /* stats node layer */
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        let specialSkillElement = document.createElement('div')
        hpElement.innerText = `Vida = ${this.hp}`
        attackElement.innerText = `Ataque = ${this.attack}`
        specialSkillElement.innerText = `Ultimate = ${this.specialSkill}`
        statsElement.appendChild(hpElement)
        statsElement.appendChild(attackElement)
        statsElement.appendChild(specialSkillElement)
        /* first node layer appends */
        enemyElement.appendChild(imgNameElement)
        enemyElement.appendChild(statsElement)
        /* main node append */
        node.appendChild(enemyElement)
    }
}

