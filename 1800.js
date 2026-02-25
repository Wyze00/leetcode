/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    
    let res = -Infinity;
    let cur = 0;
    
    for(let i = 1; i<nums.length; i++){

        if(nums[i] <= nums[i-1]){

            cur += nums[i-1];
            if(cur > res) res = cur;
            cur = 0;

        } else {
            cur += nums[i-1];
        }
    }

    cur += nums.at(-1);
    if(cur > res) return cur
    else return res;
};