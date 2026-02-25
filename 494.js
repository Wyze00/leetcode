/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let res = 0;

    check(nums, target);

    function check(nums, target, i = 0, sum = 0){

        if(i == nums.length){

            if(sum == target) res++;
            return;
        }

        check(nums, target, i + 1, sum + nums[i]);
        check(nums, target, i + 1, sum - nums[i]);
    }
    
    return res;
};

console.log(findTargetSumWays([1,1,1,1,1], 3));