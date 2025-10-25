export class Enemy {

    constructor(name, hp, attack, src) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.src = src

    }

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
        hpElement.innerText = `HP = ${this.hp}`
        attackElement.innerText = `Attack = ${this.attack}`
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

    constructor(name, hp, attack, specialSkill, multiplierDamage, src) {
        super(name, hp, attack)
        this.attack = attack * multiplierDamage
        this.specialSkill = specialSkill
        this.multiplierDamage = multiplierDamage
        this.src = src
    }

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
        hpElement.innerText = `HP = ${this.hp}`
        attackElement.innerText = `Attack = ${this.attack}`
        specialSkillElement.innerText = `Special skill = ${this.specialSkill}`
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

