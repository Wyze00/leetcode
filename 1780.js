/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n, res = 0, cache = Array(17).fill(false)) {
    
    if(res == n) return true
    else if(res > n) return false;
    
    for(let i = 0; i<=16; i++){

        
        if(cache[i]) continue;
        cache[i] = true;

        if(checkPowersOfThree(n, res + Math.pow(3,i), cache)){
            return true;
        }

        cache[i] = false;
    }

    return false;
};

var checkPowersOfThree = function(n) {
    return n.toString(3).split("").every(e=>e==1||e==0);
};

console.log(checkPowersOfThree(912));