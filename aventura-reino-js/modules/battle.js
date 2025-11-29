import { Enemy, FinalBoss } from "./enemies.js";

/**
 * Perform battle between a player and a enemy.
 * @param {Player} player the one which earns the points
 * @param {Enemy} enemy the other battle entity
 * @returns points won by player
 */
function battle(player, enemy) {
    let enemyPower = Math.max(0, enemy.attack - player.defense);
    let enemyOriginalHp = enemy.hp;
    while (player.hp > 0 && enemy.hp > 0) {
        enemy.hp -= player.attack;
        player.hp -= enemyPower;
    }
    if (player.hp > 0 && enemy.hp <= 0) {
        if (enemy instanceof Enemy) {
            player.addPoint(100 + enemy.attack)
            return 100 + enemy.attack
        } else {
            player.addPoint((100 + enemy.attack) * enemy.multiplierDamage)
            return (100 + enemy.attack) * enemy.multiplierDamage
        }

    }
    // Reset both to previous hp
    enemy.hp = enemyOriginalHp;
    return 0
}

/**
 * Select randomly among all enemies and final bosses
 * @param {Enemy[]} enemies collection of Enemy to pick from
 * @param {FinalBoss[]} bosses collection of FinalBoss to pick from
 * @returns Enemy or FinalBoss randomly selected
 */
function randomEnemy(enemies, bosses) {
    let random = Math.floor(Math.random() * (enemies.length + bosses.length))

    if (random > enemies.length - 1) {
        random -= enemies.length
        return bosses[random]
    } else {
        return enemies[random]
    }
}

/**
 * Create battle elements and append it to a given node
 * @param {HTMLElement} node node where to append battle
 * @param {Player} player player
 * @param {Enemy[]} enemies collection of Enemy to pick from
 * @param {FinalBoss[]} bosses collection of FinalBoss to pick from
 * @param {int} battleCounter counter of number of battles performed
 */
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
    if(enemy instanceof FinalBoss){
        enemyImgElement.classList.add('final-boss')
    }
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