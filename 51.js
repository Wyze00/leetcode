/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    const board = Array.from({length: n}, () => Array(n).fill("."));
    let queen = n;
    let res = [];

    function backtrack(i = 0, j = 0){

        if(queen == 0){
            res.push(board.concat().map((e) => e.join("")));
            return;
        }

        for(let x = 0; x<n; x++){

            if(!checkH(i,x) || !checkV(i, x) || !checkX(i, x)){
                continue;
            }

            board[i][x] = "Q";
            queen--;

            backtrack(i+1, x);

            board[i][x] = ".";
            queen++;
        }
    }

    function checkH(i, j){

        let tI = i;

        while(++tI < n){
            if(board[tI][j] === "Q"){
                return false;
            }
        }

        tI = i;

        while(--tI > -1){
            if(board[tI][j] === "Q"){
                return false;
            }
        }

        return true;
    } 

    function checkV(i, j){

        let tJ = j;

        while(++tJ < n){
            if(board[i][tJ] === "Q"){
                return false;
            }
        }

        tJ = j;

        while(--tJ > -1){
            if(board[i][tJ] === "Q"){
                return false;
            }
        }

        return true;
    }  

    function checkX(i, j){

        let tI = i;
        let tJ = j;

        while(++tI < n && ++tJ < n){
            if(board[tI][tJ] === "Q"){
                return false;
            }
        }

        tI = i;
        tJ = j;

        while(--tI > -1 && --tJ > -1){
            if(board[tI][tJ] === "Q"){
                return false;
            }
        }

        tI = i;
        tJ = j;

        while(--tI > -1 && ++tJ < n){
            if(board[tI][tJ] === "Q"){
                return false;
            }
        }

        tI = i;
        tJ = j;

        while(++tI < n && --tJ > -1){
            if(board[tI][tJ] === "Q"){
                return false;
            }
        }

        return true;
    }

    backtrack();
    return res;
};

console.log(solveNQueens(1));