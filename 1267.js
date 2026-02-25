// var countServers = function(grid) {
    
//     let res = 0;

//     // col
//     for(let i = 0; i<grid.length; i++){

//         for(let j = 0; j<grid[0].length; j++){

//             if(grid[i][j] === 1){

//                 let count = 1;

//                 while(j < grid[0].length && grid[i][++j] === 1){
//                     count++;
//                 }

//                 if(count !== 1) res += count;
//             }
//         }
//     }

//     // row
//     for(let i = 0; i<grid[0].length; i++){

//         for(let j = 1; j<grid.length; j++){

//             if(grid[j][i] === 1 && grid[j-1][i] === 1){

//                 if(i - 1 !== -1){
//                     if(grid[j][i-1] === 1) continue;
//                 }

//                 if(i + 1 !== grid[0].length){
//                     if(grid[j][i+1] === 1) continue;
//                 }

//                 res++;
//             }
//         }
//     }

//     if(grid.length > 1){

//         for(let i = 0; i<grid[0].length; i++){

//             if(grid[0][i] === 1 && grid[1][i] === 1){
    
//                 if(i - 1 !== -1){
//                     if(grid[0][i-1] === 1) continue;
//                 }
    
//                 if(i + 1 !== grid[0].length){
//                     if(grid[0][i+1] === 1) continue;
//                 }
    
//                 res++;
//             } 
//         }
//     }
    
//     return res;
// };

var countServers = function(grid) {
    
    let res = 0;
    const col = Array(grid[0].length).fill(0);
    const row = Array(grid.length).fill(0);
    const queue = [];

    for(let i = 0; i<grid.length; i++){

        let count = 0;
        for(let j = 0; j<grid[0].length; j++){

            if(grid[i][j] === 1){

                col[j]++;
                row[i]++;
                queue.push([i, j]);
                count++;
            }
        }

        if(count > 1) res += count;
    }

    for(let k = 0; k<queue.length; k++){

        const [i, j] = queue[k];

        if(row[i] - 1 === 0 && col[j] - 1 > 0){
            res++;
        }
    }
    
    return res;
};

console.log(countServers([[1,0,0,1,1],
                          [0,1,0,1,1],
                          [0,0,1,1,0]]));