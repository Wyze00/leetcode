/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    const memo = {};
    let res = check(n);

    function check(num){

        if(num == 1) return 1;
        if(num == 2) return 2;

        if(memo[num]){
            return memo[num];
        }

        const temp = check(num - 1) + check(num - 2);
        memo[num] = temp;

        return temp;
    }

    return res;
};
