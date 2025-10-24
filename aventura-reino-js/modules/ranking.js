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

export function categorizePlayer(player, proPoints) {
    return player.points >= proPoints ? 'ProPlayer' : 'Rookie';
}

function rankPlayers(players) {
    return players.sort((a, b) => b.points - a.points);;
}