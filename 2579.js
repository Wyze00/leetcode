/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {

    let four = 0;

    for(let i = 0; i<n; i++){
        four += i;
    }

    return four * 4 + 1;
};