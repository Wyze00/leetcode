/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let res = 0;
    let max = 0;

    for(let i = prices.length-1; i>-1; i--){

        if(prices[i] > max){
            max = prices[i];
        } else {
            res += max - prices[i];
            max = prices[i];
        }
    }

    return res;
};