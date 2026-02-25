/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let cur = 0;
    let count = 0;

    for(let i = 0; i<nums.length; i++){

        if(nums[i] != 0){
            count++;
            nums[cur++] = nums[i];
        }
    }

    for(let i = cur; i<nums.length; i++) nums[i] = 0;
};

console.log(moveZeroes([1,2,3,5,0,0,0,1]));