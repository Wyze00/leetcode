// /**
//  * @param {character[][]} board
//  * @return {void} Do not return anything, modify board in-place instead.
//  */
// var solveSudoku = function(board) {

//     let n = 0;

//     for(const col of board){

//         for(const row of col){
//             if(row === ".") n++;
//         }
//     }

//     backtrack();
//     return board;

//     function backtrack(){

//         for(let i = 0; i<board.length; i++){

//             for(let j = 0; j<board[i].length; j++){

//                 if(board[i][j] === "."){

//                     if(!checkH(i,j,String(j+1)) || !checkV(i,j,String(j+1))){
//                         continue;
//                     }

//                     board[i][j] = String(j+1);
//                     n--;

//                     if(backtrack()){
//                         return true;
//                     }

//                     board[i][j] = ".";
//                     n++;
//                 }
//             }
//         }

//         if(n === 0){
//             return true;
//         }

//         return false;
//     }

//     function checkH(i, j, val){

//         let tI = i;

//         while(++tI < board.length){
//             if(board[tI][j] === val){
//                 return false;
//             }
//         }

//         tI = i;

//         while(--tI > -1){
//             if(board[tI][j] === val){
//                 return false;
//             }
//         }

//         return true;
//     } 

//     function checkV(i, j, val){

//         let tJ = j;

//         while(++tJ < board.length){
//             if(board[i][tJ] === val){
//                 return false;
//             }
//         }

//         tJ = j;

//         while(--tJ > -1){
//             if(board[i][tJ] === val){
//                 return false;
//             }
//         }

//         return true;
//     } 
// };

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    backtrack();
    return board;

    function backtrack() {

        for (let i = 0; i < 9; i++) {

            for (let j = 0; j < 9; j++) {

                if (board[i][j] === ".") {

                    for (let num = 1; num <= 9; num++) {

                        let charNum = String(num);

                        if (isValid(i, j, charNum)) {
                            
                            board[i][j] = charNum;

                            if (backtrack()) {
                                return true;
                            }

                            board[i][j] = ".";
                        }
                    }

                    return false; 
                }
            }
        }   

        return true; 
    }

    function isValid(i, j, val) {

        for (let x = 0; x < 9; x++) {
            if (board[i][x] === val) return false;
        }

        for (let y = 0; y < 9; y++) {
            if (board[y][j] === val) return false;
        }

        let startRow = Math.floor(i / 3) * 3;
        let startCol = Math.floor(j / 3) * 3;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (board[startRow + x][startCol + y] === val) return false;
            }
        }
        return true;
    }
};


console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],
                         ["6",".",".","1","9","5",".",".","."],
                         [".","9","8",".",".",".",".","6","."],
                         ["8",".",".",".","6",".",".",".","3"],
                         ["4",".",".","8",".","3",".",".","1"],
                         ["7",".",".",".","2",".",".",".","6"],
                         [".","6",".",".",".",".","2","8","."],
                         [".",".",".","4","1","9",".",".","5"],
                         [".",".",".",".","8",".",".","7","9"]]));