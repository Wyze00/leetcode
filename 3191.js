/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    
    let res = 0;

    for(let i = 0; i<=nums.length-3; i++){

        if(nums[i] == 1) continue;

        res++;

        nums[i] ^= 1;
        nums[i+1] ^= 1;
        nums[i+2] ^= 1;
    }

    for(let i = nums.length-1; i >= nums.length-3; i--){
        if(!nums[i]) return -1;
    }

    return res;
};

console.log(minOperations([0,1,1,1]));