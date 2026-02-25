
var findMaxFish = function(grid) {
    
    let res = 0;

    for(let i = 0; i<grid.length; i++){

        for(let j = 0; j<grid[0].length; j++){

            if(grid[i][j] != 0){
            
                const tmp = check(i,j);
                if(tmp > res) res = tmp;
            }
        }
    }

    return res;

    function check(i, j){

        if(i < 0 || i == grid.length || j < 0 || j == grid[0].length || grid[i][j] == 0){
            return 0;
        }

        const val = grid[i][j];
        grid[i][j] = 0;
        return val + check(i+1, j) + check(i-1, j) + check(i, j+1) + check(i, j-1);
    }

};


console.log(findMaxFish([[0,2,1,0]
                        ,[4,0,0,3]
                        ,[1,0,0,4]
                        ,[0,3,2,0]]));