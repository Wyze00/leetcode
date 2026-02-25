/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {

    const prime = Array(right + 1).fill(true);
    sieve();

    let init = 0;
    let res = [-1, -1];
    let prev;

    for(let i = left; i <= right; i++){

        if(prime[i]){

            if(init != 2){
                res[init++] = i;

            } else {

                
                if(i - prev < res[1] - res[2]){

                    res[0] = prev;
                    res[1] = i;
                }
            }

            prev = i;
        }
    }

    function sieve(){

        for(let i = 2; i * i <= right; i++){

            if(prime[i]){

                for(let j = i * i; j <= right; j += i){
                    prime[j] = false;
                }
            }
        }

    }

    return res.every(e=>e!=-1) ? res : [-1, -1];
};
