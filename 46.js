/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    const res = [];

    function backtrack(nums, sub){

        if(sub.length == nums.length){
            res.push(sub);
            return;
        }

        const mySet = new Set(sub);
        
        for(let i = 0; i<nums.length; i++){

            if(mySet.has(nums[i])) continue;

            mySet.add(nums[i]);
            sub.push(nums[i]);
            backtrack(nums, sub.concat());
            sub.pop();
        }
    }

    backtrack(nums, []);
    return res;
};