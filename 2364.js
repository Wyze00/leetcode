/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {

    const myI = new Map();
    let good = 0;

    for(let i = nums.length-1; i>-1; i--){

        const sum = nums[i] - i;
        
        if(!myI.has(sum)){
            myI.set(sum, 0);
        }

        good += myI.get(sum);
        myI.set(sum, myI.get(sum) + 1);
    }

    return (nums.length) * (nums.length - 1) / 2 - good;
};