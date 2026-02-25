/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {

    let jwb = Number.MAX_SAFE_INTEGER;    
    
    function check(init, n, res = 0){

        if(init == 0){
            jwb = Math.min(jwb, res);
            return;
        } else if (init < 0 || res >= jwb){
            return;
        }

        for(let i = n; i >= 1; i--){
            check(init - i * i, i, res + 1);
        }
    }   

    check(n, Math.floor(Math.sqrt(n)));
    return jwb;
};


console.log(numSquares(1));