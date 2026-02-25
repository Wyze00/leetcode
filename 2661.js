// var firstCompleteIndex = function(arr, mat) {

//     const l1 = mat.length, l2 = mat[0].length;

//     // Set all index
//     const myMap = new Map();
//     for(let i = 0; i<l1; i++){

//         for(let j = 0; j<l2; j++){
//             myMap.set(mat[i][j], [i, j]);
//         }
//     }

//     // Set ij to undefined
//     for(let k = 0; k<arr.length; k++){

//         const [i, j] = myMap.get(arr[k]);
//         mat[i][j] = undefined;

//         if(checkCol(j) || checkRow(i)) return k;
//    }   

//    // Check cols and rows
//    function checkCol(j){

//         for(let k = 0; k<l1; k++){
//             if(mat[k][j] != undefined) return false;
//         }

//         return true;
//    }

//    function checkRow(i){

//         for(let k = 0; k<l2; k++){
//             if(mat[i][k] != undefined) return false;
//         }

//         return true;
//     }
// };

var firstCompleteIndex = function(arr, mat) {

    const l1 = mat.length, l2 = mat[0].length;
    const col = new Map(), row = new Map();
    const myMap = new Map();
    
    for(let i = 0; i<l1; i++){

        for(let j = 0; j<l2; j++){
            myMap.set(mat[i][j], [i, j]);
        }
    }

    for(let k = 0; k<arr.length; k++){

        const [j, i] = myMap.get(arr[k]);

        if(col.has(i)){
            
            let cols = col.get(i) + 1;
            if(cols == l1) return k;
            else col.set(i, cols);

        } else {
            if(l1 == 1) return k;
            col.set(i, 1);
        }

        if(row.has(j)){
            
            let rows = row.get(j) + 1;
            if(rows == l2) return k;
            else row.set(j, rows);

        } else {
            if(l2 == 1) return k;
            row.set(j, 1);
        }
   }   
};       