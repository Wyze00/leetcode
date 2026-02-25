/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    const mySet = new Set();

    for(let i = 0; i<nums.length; i++){

        if(mySet.has(nums[i])){
            mySet.delete(nums[i]);
        } else {
            mySet.add(nums[i]);
        }
    }

    return mySet.values().next().value;
};
