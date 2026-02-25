/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {

    const val = Array(grid.length * grid.length + 1).fill(false);
    const res = [0,0];

    for(let i = 0; i < grid.length; i++){

        for(let j = 0; j < grid[i].length; j++){

            if(val[grid[i][j]]){
                res[0] = grid[i][j];
            }

            val[grid[i][j]] = true;
        }
    }

    for(let i = 1; i<val.length; i++){

        if(val[i]) continue;

        res[1] = i;
        return res;
    }

    return res;
};