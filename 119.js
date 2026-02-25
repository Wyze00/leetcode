/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    if(rowIndex === 0) return [1];
    
    const res = [[1], [1,1]];
    if(rowIndex === 1) return [1,1];

    for(let i = 2; i < rowIndex+1; i++){

        const tmp = Array(i + 1).fill(1);

        for(let j = 1; j<tmp.length-1; j++){
            tmp[j] = res[i-1][j-1] + res[i-1][j];
        }

        res.push(tmp);
    }

    return res[rowIndex];
};