/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, cache = {}) {
    
    if(n == 0) return 0;
    if(n == 1 || n == 2) return 1;
    
    if(cache[n]) return cache[n]
    else return cache[n] = fib(n-1) + fib(n-2);
};