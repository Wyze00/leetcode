/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    if(nums.length < 3) return Math.max(...nums);

    nums = [... new Set(nums)];
    const init = [nums[0], nums[1], nums[2]].sort((a,b)=>b-a);

    if(init.some(e=>e==undefined)) return Math.max(...nums);

    for(let i = 3; i<nums.length; i++){

        if(nums[i] > init[2]){
            [nums[i], init[2]] = [init[2], nums[i]];
        }

        if(init[2] > init[1]){
            [init[2], init[1]] = [init[1], init[2]];
        }

        if(init[1] > init[0]){
            [init[1], init[0]] = [init[0], init[1]];
        }
    }

    return init[2]
};

console.log(thirdMax([0,0,-1]));