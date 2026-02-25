/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {


    for(let i = 0; i<board.length; i++){

        for(let j = 0; j<board[i].length; j++){

            if(board[i][j] !== "."){
                if(!isValid(i, j, board[i][j])){
                    return false;
                }
            }
        }
    }

    return true;

    function isValid(i, j, val) {

        console.log(val);

        for (let x = 0; x < 9; x++) {
            if (board[i][x] === val && x !== j) return false;
        }

        for (let y = 0; y < 9; y++) {
            if (board[y][j] === val && y !== i) return false;
        }

        let startRow = Math.floor(i / 3) * 3;
        let startCol = Math.floor(j / 3) * 3;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (board[startRow + x][startCol + y] === val && startRow+x !== i && startRow+y !== j) return false;
            }
        }

        return true;
    }
};  

console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],
                           [".","4",".","3",".",".",".",".","."],
                           [".",".",".",".",".","3",".",".","1"],
                           ["8",".",".",".",".",".",".","2","."],
                           [".",".","2",".","7",".",".",".","."],
                           [".","1","5",".",".",".",".",".","."],
                           [".",".",".",".",".","2",".",".","."],
                           [".","2",".","9",".",".",".",".","."],
                           [".",".","4",".",".",".",".",".","."]]
));