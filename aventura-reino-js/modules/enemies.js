export class Enemy {

    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.baseAttack = attack;
    }

}

export class FinalBoss extends Enemy {

    constructor(name, hp, attack, specialSkill, multiplierDamage) {
        super(name, hp, attack);
        this.specialSkill = specialSkill;
        this.multiplierDamage = multiplierDamage;
    }

    get attack(){
        return this.attack * this.multiplierDamage
    }
}

