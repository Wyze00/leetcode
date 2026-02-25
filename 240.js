/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    const dir = [[0,1], [1,0], [0,-1], [-1,0]];

    function bfs(i, j){

        if(matrix[i][j] === target){
            return true;
        } else if(matrix[i][j] > target || matrix[i][j] === false){
            return false;
        }   

        matrix[i][j] = false;

        for(const [x, y] of dir){

            const newI = i + x;
            const newJ = j + y;

            if(newI > -1 && newI < matrix.length && newJ > -1 && newJ < matrix[i].length){
                if(bfs(newI, newJ)) return true;
            }
        }

        return false;
    }

    return bfs(0,0);
};

console.log(searchMatrix([[1,4,7,11,15],
                          [2,5,8,12,19],
                          [3,6,9,16,22],
                          [10,13,14,17,24],
                          [18,21,23,26,30]], 20));