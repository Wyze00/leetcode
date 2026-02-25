/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    k = k % nums.length;

    const temp = Array(nums.length);

    for(let i = 0; i<nums.length; i++){
        temp[(i+k) % nums.length] = nums[i];
    }

    for(let i = 0; i<nums.length; i++){
        nums[i] = temp[i];
    }
};

x = [-1,-100,3,99];

console.log(rotate(x, 2));

console.log(x);