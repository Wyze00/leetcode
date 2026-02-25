
var largestIsland = function(grid) {

    const queue = [];
    const isl = new Map();
    const idx = new Map();
    let ident = 0;
    let cnt = 0;
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    let res = 0;


    for(let i = 0; i<grid.length; i++){

        for(let j = 0; j<grid[0].length; j++){

            if(grid[i][j] == 0){
                queue.push([i,j]);
            } else if(grid[i][j] == 1){

                bfs(i, j);
                isl.set(ident, cnt);
                cnt = 0;
                ident++;
            }
        }
    }

    function bfs(i, j){

        cnt++
        grid[i][j] = 2;
        idx.set(`${i},${j}`, ident);

        for(const [x, y] of dir){

            const dx = i+x;
            const dy = j+y;

            if(dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length && grid[dx][dy] == 1){
                bfs(dx, dy);
            }
        }
    }

    if(!queue.length) return isl.get(0);

    for(const [i, j] of queue){

        const tmp = new Set();
        let r = 1;

        for(const [x, y] of dir){

            const dx = i+x;
            const dy = j+y;

            if(dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length && grid[dx][dy] != 0){

                const part = idx.get(`${dx},${dy}`);

                if(tmp.has(part)){
                    continue;
                } else{
                    tmp.add(part);
                }

                r += isl.get(part);
            }
        }

        if(r > res) res = r;
    }

    return res;
};

console.log(largestIsland([[1, 1, 1], 
                           [1, 1, 1], 
                           [1, 1, 1]]));      