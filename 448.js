/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    const toN = Array(nums.length).fill(false);

    for(let i = 0; i<nums.length; i++){
        toN[nums[i] - 1] = true;
    }

    const res = [];
    for(let i = 0; i<toN.length; i++) if(!toN[i]) res.push(i+1);

    return res;
};

console.log(findDisappearedNumbers([1,1,2]));