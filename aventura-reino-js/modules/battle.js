function battle(player, enemy) {
    let enemyPower = Math.max(5, player.defense - enemy.attack);
    let enemyOriginalHp = enemy.hp;
    while (player.hp > 0 && enemy.hp > 0) {
        enemy.hp -= player.attack;
        player.hp -= enemyPower;
    }
    if (player.hp > 0 && enemy.hp <= 0) {
        player.points += enemyPower;
        return enemyPower
    }
    return 0
    // Reset both to previous hp
    enemy.hp = enemyOriginalHp;

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

export function showBattle(node, player, enemies, bosses) {
    let enemy = randomEnemy(enemies, bosses)
    let pointsWon = battle(player, enemy)
    let playerBattleElement = node.querySelector('#player-battle')
    let enemyBattleElement = node.querySelector('#enemy-battle')
    playerBattleElement.innerHTML = ""
    enemyBattleElement.innerHTML = ""
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




    let winnerElement = node.querySelector('#winner')
    let points = node.querySelector('#points')
    points.innerText = pointsWon
    if (pointsWon > 0) {
        winnerElement.innerText = player.name
    } else {
        winnerElement.innerText = enemy.name
    }



}