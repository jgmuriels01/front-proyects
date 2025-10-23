export function battle(player, enemy) {
    let enemyPower = Math.max(5, player.defense - enemy.attack);
    let playerOriginalHp = player.hp;
    let enemyOriginalHp = enemy.hp;
    while (player.hp > 0 && enemy.hp > 0) {
        enemy.hp -= player.attack;
        player.hp -= enemyPower;
    }
    if (player.hp > 0 && enemy.hp <= 0) {
        player.points += enemyPower;
    }
    // Reset both to previous hp
    player.hp = playerOriginalHp;
    enemy.hp = enemyOriginalHp;

}