/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const res = [];
    let n = matrix.length, m = matrix[0].length;
    let i = j = 0;

    while(true) {

        while(j < m && matrix[i][j] !== false){

            res.push(matrix[i][j]);
            matrix[i][j] = false;
            j++;
        }

        j--;
        i++;
        if(i == n || j == m || j == -1 || i == -1 || matrix[i][j] === false) break;

        while(i < n && matrix[i][j] !== false){
            res.push(matrix[i][j]);
            matrix[i][j] = false;
            i++;
        }
        
        i--;
        j--;
        if(i == n || j == m || j == -1 || i == -1 || matrix[i][j] === false) break;
        
        while(j > -1 && matrix[i][j] !== false){
            res.push(matrix[i][j]);
            matrix[i][j] = false;
            j--;
        }

        j++
        i--;
        if(i == n || j == m || j == -1 || i == -1 || matrix[i][j] === false) break;

        while(i > 0 && matrix[i][j] !== false){
            res.push(matrix[i][j]);
            matrix[i][j] = false;
            i--;
        }

        i++;
        j++;
        if(i == n || j == m || j == -1 || i == -1 || matrix[i][j] === false) break;
    } 

    return res;
};

console.log(spiralOrder([[1],
                         [2],
                         [3]]));     