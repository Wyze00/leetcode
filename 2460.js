/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

    for(let i = 0; i<nums.length-1; i++){

        if(nums[i] == nums[i+1]){
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }

    console.log(nums);

    let nz = 0;
    let z = 0;

    while(nz < nums.length && z < nums.length){

        while(z < nums.length && nums[z] != 0) z++;
        while(nz < nums.length && nz < z || nums[nz] == 0) nz++;

        if(z == nums.length || nz == nums.length) break;

        [nums[z], nums[nz]] = [nums[nz], nums[z]];
    }

    return nums
};