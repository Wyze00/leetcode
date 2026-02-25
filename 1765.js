
// var highestPeak = function(isWater) {
    
//     const res = [];

//     for(let i = 0; i<isWater.length; i++){

//         const temp = [];
//         for(let j = 0; j<isWater[0].length; j++){
            
//             if(isWater[i][j] === 1){
//                 temp.push(0);
//                 continue;
//             }

//             if(i - 1 != -1){
//                 if(isWater[i-1][j] == 1) {
//                     temp.push(1);
//                     continue;
//                 }
//             }

//             if(i + 1 != isWater.length){
//                 if(isWater[i+1][j] == 1){
//                     temp.push(1);
//                     continue;
//                 }
//             }

//             if(j - 1 != -1){
//                 if(isWater[i][j-1] == 1){
//                     temp.push(1);
//                     continue;
//                 }
//             }
            
//             if(j + 1 != isWater[0].length){
//                 if(isWater[i][j+1] == 1){
//                     temp.push(1);
//                     continue;
//                 }
//             }

//             temp.push(2);
//         }

//         res.push(temp);
//     }

//     let ulang = true;
//     while(ulang){

//         ulang = false;

//         for(let i = 0; i<isWater.length; i++){

//             for(let j = 0; j<isWater[0].length; j++){
    
//                 const temp = res[i][j];
//                 if(temp == 0 || temp == 1) continue;
    
//                 let min = Infinity;
//                 if(i - 1 != -1){
//                     if(res[i-1][j] < min) min = res[i-1][j];
//                 }
    
//                 if(i + 1 != res.length){
//                     if(res[i+1][j] < min) min = res[i+1][j];
//                 }
    
//                 if(j - 1 != -1){
//                     if(res[i][j-1] < min) min = res[i][j-1];
                    
//                 }
                
//                 if(j + 1 != res[0].length){
//                     if(res[i][j+1] < min) min = res[i][j+1];
//                 }
    
//                 if(res[i][j] != min+1) ulang = true;
//                 res[i][j] = min == Infinity ? 2 : min+1;
//             }
//         }
//     }

//     return res;
// };

// var highestPeak = function(isWater) {
    
//     const res = Array(isWater.length);
//     const water = [];

//     for(let i = 0; i<isWater.length; i++){

//         for(let j = 0; j<isWater[0].length; j++){
            
//             if(isWater[i][j] === 1) water.push([i, j]);
//         }
//     }

//     for(let i = 0; i<isWater.length; i++){

//         const temp = Array(isWater[0].length);
//         for(let j = 0; j<isWater[0].length; j++){

//             if(isWater[i][j] == 1){
//                 temp[j] = 0;
//                 continue;
//             }

//             let min = Infinity;
//             for(let k = 0; k<water.length; k++){

//                 const w = water[k];
//                 const abs = Math.abs(i - w[0]) + Math.abs(j - w[1]);

//                 if(abs < min) min = abs;
//             }

//             temp[j] = min;
//         }

//         res[i] = temp;
//     }


//     return res;
// };

var highestPeak = function(isWater) {

    const rows = isWater.length;
    const cols = isWater[0].length;
    const res = Array.from({ length: rows }, () => Array(cols).fill(-1));
    const queue = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (isWater[i][j] === 1) {
                res[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    let start = 0; 
    let end = queue.length; 

    while (start < end) {
        const [x, y] = queue[start++];

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && res[nx][ny] === -1) {
                res[nx][ny] = res[x][y] + 1;
                queue.push([nx, ny]); 
                end++;
            }
        }
    }

    return res;
};