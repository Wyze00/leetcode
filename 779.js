/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k, depth = 1, queue = [0]) {
    
    if(n == depth) return queue[k-1];

    const len = queue.length;

    for(let i = 0; i<len; i++){

        const num = queue.shift();

        if(num == 0){
            queue.push(0,1);
        } else {
            queue.push(1,0);
        }
    }

    return kthGrammar(n, k, depth+1, queue);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k, depth = 1, res = "0") {

    if(depth == n) return res[k-1];
    return kthGrammar(n, k, depth+1, res + res.split("").map(e=>e=="1"?"0":"1").join(""));
};

var kthGrammar = function(n, k) {

    if (n === 1) return 0;

    const mid = Math.pow(2, n - 2);

    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return 1 - kthGrammar(n - 1, k - mid);
    }
};

console.log(kthGrammar(30, 323));