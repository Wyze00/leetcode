/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    const mySet = [...new Set(nums)];

    for(let i = 0; i<mySet.length; i++){
        nums[i] = mySet[i];
    }

    return mySet.length;
};