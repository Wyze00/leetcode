/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  
    let res = 0;
    const queue = [];
    const dir = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    
    // isi queue
    for(let i = 0; i<grid.length; i++){

        for(let j = 0; j<grid[i].length; j++){
        
            if(grid[i][j] === '1'){
                queue.push([i,j]);
            }
        }
    }

    // bfs
    function bfs(i, j){

        if(grid[i][j] === '2' || grid[i][j] === '0') return;

        grid[i][j] = '2';

        for(const [x,y] of dir){

            const newI = i + x; 
            const newJ = j + y;
            
            if(newI > -1 && newI < grid.length && newJ > -1 && newJ < grid[0].length){
                bfs(newI, newJ);
            }
        }
    }

    while(queue.length){

        const [i,j] = queue.shift();

        if(grid[i][j] === '1') res++;
        bfs(i,j);
    }
    
    return res;
};

console.log(numIslands([["1","1","1","1","0"],
                        ["1","1","0","1","0"],
                        ["1","1","0","0","0"],
                        ["0","0","1","0","1"]]));