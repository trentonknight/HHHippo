function hippo(numPellets) {
    var players = [3, 4, 6, 1];
    var numTurns = 0;
    // This while loop uses shift to establish 
    // the amount of pellets consumed
    // from the first elements of the array
    // Next that same amount is pushed to the right side 
    // of the array returning the array to the same 
    // amount of players.
    // Onced the popped amount removes all the pellets
    // The while loop concludes.
    while (numPellets >= 0) {
        var popped = players.shift();
        players.push(popped);
        numPellets = numPellets - popped;
        // simple increment counter
        numTurns++;
    }
    // array with amount of turns played as a group, 
    // and last player until 0 pellets
    // Math is used to round up the amount of turns divided by players
    // Modulo is used to determine what player, played last. 
    // Negative -1 is used due to there being a player 0
    var final = [Math.ceil(numTurns / 4), ((numTurns % 4) - 1)];
    return final;
}
module.exports = hippo;
//console.log(hippo(1))
//console.log(hippo(9))
//console.log(hippo(19))
// hippo(1) => [1, 0]
// hippo(9) => [1, 2]
// hippo(19) => [2, 1]
//
// player 0 will eat 3 pellets
// player 1 will eat 4 pellets
// player 2 will eat 6 pellets
// player 3 will eat 1 pellet
// The game ends when there are 0 pellets left.
