/* Return a list:
    - [0] = proPlayers
    - [1] = rookies
*/
export function categogorizePlayers(players, proPoints) {
    let categorizedPlayers = [];
    categorizedPlayers[0] = players.forEach(player => player.points >= proPoints);
    categorizedPlayers[1] = players.forEach(player => player.points < proPoints);
    return categorizedPlayers;
}

export function categorizedPlayer(player, proPoints) {
    return player.points >= proPoints ? 'ProPlayer' : 'Rookie';
}

export function rankPlayers(players) {
    return players.sort((a, b) => b.points - a.points);;
}