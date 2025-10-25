/* Return a list:
    - [0] = proPlayers
    - [1] = rookies
*/
function categorizePlayers(players, proPoints) {
    let categorizedPlayers = [];
    categorizedPlayers[0] = players.forEach(player => player.points >= proPoints);
    categorizedPlayers[1] = players.forEach(player => player.points < proPoints);
    return categorizedPlayers;
}

function categorizePlayer(player, proPoints) {
    return player.points >= proPoints ? 'ProPlayer' : 'Rookie';
}

function rankPlayers(players) {
    return players.sort((a, b) => b.points - a.points);;
}

export function showRanking(node, player, proPoints){
    let playerName = node.querySelector('#player-name-ranking')
    let playerCategory = node.querySelector('#player-category')
    let playerPoints = node.querySelector('#points-ranking')
    playerName.innerText = player.name
    playerCategory.innerText = categorizePlayer(player, proPoints)
    playerPoints.innerText = player.points
}