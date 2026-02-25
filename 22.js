/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const max = n*2;
    const res = [];

    function rec(str = "", left = 0, right = 0){

        if(right > left || left > max/2){
            return;
        }

        if(left + right === max){
            res.push(str);
            return;
        }

        rec(str + "(", left + 1, right);
        rec(str + ")", left, right + 1);
    }

    rec();
    return res;
};

console.log(generateParenthesis(3));