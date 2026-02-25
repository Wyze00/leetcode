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
            if(max - prices[i] > res) res = max - prices[i];
        }
    }

    return res;
};