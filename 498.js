/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {

    const res = [];
    let dif = 0;

    for(let i = 0; i<mat.length; i++){

        for(let j = 0; j<mat[0].length; j++){

            if(mat[i][j] !== false){

                let tI = i;
                let tJ = j;
                const tmp = [];

                while(tI < mat.length && tJ > -1){

                    tmp.push(mat[tI][tJ]);
                    mat[tI++][tJ--] = false;
                }

                if(dif != 0) res.push(...tmp)
                else res.push(...tmp.reverse());
                
                dif ^= 1;
            }
        }
    }

    return res;
};

console.log(findDiagonalOrder([[1,2,3],
                               [4,5,6],
                               [7,8,9]]));     