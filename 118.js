/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    if(numRows === 1) return [[1]];
    
    const res = [[1], [1,1]];
    if(numRows === 2) return res;

    for(let i = 2; i < numRows; i++){

        const tmp = Array(i + 1).fill(1);

        for(let j = 1; j<tmp.length-1; j++){
            tmp[j] = res[i-1][j-1] + res[i-1][j];
        }

        res.push(tmp);
    }

    return res;
};