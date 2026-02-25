/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {

    let max = nums[0] > nums[1] ? [nums[0], 0] : [nums[1], 1];
    let max2 = nums[0] < nums[1] ? [nums[0], 0] : [nums[1], 1];

    for(let i = 2; i<nums.length; i++){

        if(nums[i] > max2[0]){
            max2[0] = nums[i];
            max2[1] = i;
        }

        if(max2[0] > max[0]){
            [max[0], max2[0]] = [max2[0], max[0]];
            [max[1], max2[1]] = [max2[1], max[1]];
        }
    }

    if(max2[0] * 2 <= max[0]) return max[1]
    else return -1;
};

console.log(dominantIndex([1,6,1,0]));