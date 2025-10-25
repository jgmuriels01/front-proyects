export class Enemy {

    constructor(name, hp, attack, src) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.src = src

    }

    showEnemy(node) {
        let enemyElement = document.createElement('div')
        let divElement = document.createElement('div')
        let imgElement = document.createElement('img')
        let nameElement = document.createElement('div')
        let statsElement = document.createElement('div')
        imgElement.setAttribute("src", this.src)
        nameElement.innerText = this.name
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        hpElement.innerText = `HP = ${this.hp}`
        attackElement.innerText = `Attack = ${this.attack}`
        statsElement.appendChild(hpElement)
        statsElement.appendChild(attackElement)
        divElement.appendChild(imgElement)
        divElement.appendChild(nameElement)
        enemyElement.appendChild(divElement)
        enemyElement.appendChild(statsElement)
        node.appendChild(enemyElement)
    }
}

export class FinalBoss extends Enemy {

    constructor(name, hp, attack, specialSkill, multiplierDamage, src) {
        super(name, hp, attack)
        this.attack = attack * multiplierDamage
        this.specialSkill = specialSkill
        this.multiplierDamage = multiplierDamage
        this.src = src
    }

    showEnemy(node) {
        let enemyElement = document.createElement('div')
        let divElement = document.createElement('div')
        let imgElement = document.createElement('img')
        let nameElement = document.createElement('div')
        let statsElement = document.createElement('div')
        imgElement.setAttribute("src", this.src)
        nameElement.innerText = this.name
        let hpElement = document.createElement('div')
        let attackElement = document.createElement('div')
        let specialSkillElement = document.createElement('div')
        hpElement.innerText = `HP = ${this.hp}`
        attackElement.innerText = `Attack = ${this.attack}`
        specialSkillElement.innerText = `Special skill = ${this.specialSkill}`
        statsElement.appendChild(hpElement)
        statsElement.appendChild(attackElement)
        statsElement.appendChild(specialSkillElement)
        divElement.appendChild(imgElement)
        divElement.appendChild(nameElement)
        enemyElement.appendChild(divElement)
        enemyElement.appendChild(statsElement)
        node.appendChild(enemyElement)
    }
}

