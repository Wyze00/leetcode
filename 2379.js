/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {

    let res = Number.MAX_SAFE_INTEGER;
    let w = 0;

    for(let i = 0; i<k; i++) if(blocks[i] === 'W') w++;
    res = w;

    for(let i = k, j = 0; i <blocks.length; i++, j++){

        if(blocks[j] === 'W') w--;
        if(blocks[i] === 'W') w++;

        res = Math.min(res, w);
    }

    return res;
};

console.log(minimumRecolors("WBBWWBBWBW",7));

console.log(Math.pow(10,4));