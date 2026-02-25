/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
  
    const char = ['a', 'b', 'c'];
    const res = [];

    for(let i = 0; i<char.length; i++){
        backtrack(char, n, char[i]);
    }

    function backtrack(alp, n, str){

        if(str.length == n){
            res.push(str);
            return;
        }

        for(let i = 0; i<alp.length; i++){
            if(str[str.length-1] != alp[i]) backtrack(alp, n, str + alp[i]);
        }
    }

    return k > res.length ? "" : res[k-1];
};