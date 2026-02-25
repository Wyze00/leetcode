/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    const res = Array(nums.length);

    let even = 0;
    let odd = nums.length-1;

    for(let i = 0; i<nums.length; i++){

        if(nums[i] % 2){
            res[odd--] = nums[i];
        } else {
            res[even++] = nums[i];
        }
    }

    return res;
};  


console.log(sortArrayByParity([3,1,2,4]));