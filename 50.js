/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n, init = x, sign) {

    if(n == 1 || n == -1){
        return sign ? 1 / x : x;
    }
    
    if(n > 0){
        return myPow(x*init, n-1, init, 0);
    } else {
        return myPow(x*init, n+1, init, 1);
    }
};

function myPow(x, n){

    const quickPow = (base, exponent) => {

        let result = 1;

        while (exponent) {

            if (exponent & 1) {
                result *= base;
            }
            
            base *= base;
            exponent >>>= 1; 
        }

        return result; 
    };

    return n >= 0 ? quickPow(x, n) : 1 / quickPow(x, -n);
}

