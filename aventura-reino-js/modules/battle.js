import { Enemy } from "./enemies.js";

function battle(player, enemy) {
    let enemyPower = Math.max(0, enemy.attack - player.defense);
    let enemyOriginalHp = enemy.hp;
    while (player.hp > 0 && enemy.hp > 0) {
        enemy.hp -= player.attack;
        player.hp -= enemyPower;
    }
    if (player.hp > 0 && enemy.hp <= 0) {
        if (typeof enemy == Enemy) {
            player.addPoint(100 + enemy.attack)
            return (100 + enemy.attack)
        } else {
            player.addPoint((100 + enemy.attack) * enemy.multiplierDamage)
            return ((100 + enemy.attack) * enemy.multiplierDamage)
        }

    }
    // Reset both to previous hp
    enemy.hp = enemyOriginalHp;
    return 0
}

function randomEnemy(enemies, bosses) {
    let random = Math.floor(Math.random() * (enemies.length + bosses.length))

    if (random > enemies.length - 1) {
        random -= enemies.length
        return bosses[random]
    } else {
        return enemies[random]
    }
}

export function showBattle(node, player, enemies, bosses, battleCounter) {
    let enemy = randomEnemy(enemies, bosses)
    let pointsWon = battle(player, enemy)
    /* battle count */
    let battleCountElement = document.getElementById('battle-count')
    battleCountElement.innerText = `Batalla ${battleCounter}`
    /* battle nodes */
    let playerBattleElement = node.querySelector('#player-battle')
    let enemyBattleElement = node.querySelector('#enemy-battle')
    playerBattleElement.innerHTML = ""
    enemyBattleElement.innerHTML = ""
    /* battle sub-nodes */
    let playerNameElement = document.createElement('h2')
    let playerImgElement = document.createElement('img')
    let enemyNameElement = document.createElement('h2')
    let enemyImgElement = document.createElement('img')
    playerNameElement.innerText = player.name
    playerImgElement.setAttribute('src', player.src)
    enemyNameElement.innerText = enemy.name
    enemyImgElement.setAttribute('src', enemy.src)
    playerBattleElement.append(playerNameElement)
    playerBattleElement.append(playerImgElement)
    enemyBattleElement.append(enemyNameElement)
    enemyBattleElement.append(enemyImgElement)
    /* battle-info */
    let winnerElement = node.querySelector('#winner')
    let points = node.querySelector('#points')
    points.innerText = pointsWon
    if (pointsWon > 0) {
        winnerElement.innerText = player.name
    } else {
        winnerElement.innerText = enemy.name
    }



}