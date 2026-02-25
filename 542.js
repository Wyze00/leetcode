/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
        
    const queue = [];
    const dir = [[0,1], [1,0], [0,-1], [-1,0]]
    const color = Array.from({length: mat.length}, () => Array(mat[0].length).fill(1))

    // * Find all 1
    for(let i = 0; i<mat.length; i++){

        for(let j = 0; j<mat[i].length; j++){

            if(mat[i][j] === 1){
                queue.push([i,j]);
                check();
            }
        }
    }

    // * Queue
    function check(){

        while(queue.length){

            const [i, j] = queue.shift();
    
            if(color[i][j] && mat[i][j] == 1){
    
                let min = Number.MAX_VALUE;
    
                for(const [x, y] of dir){
    
                    const newI = i + x;
                    const newJ = j + y;
    
                    if(newI > -1 && newI < mat.length && newJ > -1 && newJ < mat[i].length){
                        queue.push([newI, newJ]);
                        min = Math.min(min, mat[newI][newJ]);
                    }
                }
    
                mat[i][j] = min+1;
            }
    
            color[i][j] = 0;
        }
    }
    
    return mat;
};


/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
        
    const queue = [];
    const dir = [[0,1], [1,0], [0,-1], [-1,0]]
    const color = Array.from({length: mat.length}, () => Array(mat[0].length).fill(1))

    // * Find all 1
    for(let i = 0; i<mat.length; i++){

        for(let j = 0; j<mat[i].length; j++){

            if(mat[i][j] === 0){
                queue.push([i,j, 0]);
            } 
        }
    }

    // * Queue

    while(queue.length){

        const [i, j, col] = queue.shift();

        if(color[i][j]){

            for(const [x, y] of dir){

                const newI = i + x;
                const newJ = j + y;

                if(newI > -1 && newI < mat.length && newJ > -1 && newJ < mat[i].length){
                    queue.push([newI, newJ, col+1]);
                }
            }

            mat[i][j] = col;
        }

        color[i][j] = 0;
    }
    
    
    return mat;
};

console.log(updateMatrix([[0,0,1,0,1,1,1,0,1,1],
                          [1,1,1,1,0,1,1,1,1,1],
                          [1,1,1,1,1,0,0,0,1,1],
                          [1,0,1,0,1,1,1,0,1,1],
                          [0,0,1,1,1,0,1,1,1,1],
                          [1,0,1,1,1,1,1,1,1,1],
                          [1,1,1,1,0,1,0,1,0,1],
                          [0,1,0,0,0,1,0,0,1,1],
                          [1,1,1,0,1,1,0,1,0,1],
                          [1,0,1,1,1,0,1,1,1,0]]));