/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let curSum = 0;
    let l = 0;
    let res = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i<nums.length; i++){

        curSum += nums[i];

        if(curSum >= target){

            while(curSum - nums[l] >= target){
                curSum -= nums[l++];
            }

            if(i+1 - l < res) res = i+1 - l;
        }
    }

    return res == Number.MAX_SAFE_INTEGER ? 0 : res;
};

console.log(minSubArrayLen(213, [12]));