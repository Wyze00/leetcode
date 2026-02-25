/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {

    let res = 0;
    nums.sort((a,b)=>a-b);

    console.log(nums);

    for(let i = 0, j = nums.length-1; i < j;){


        const sum = nums[i] + nums[j];
        console.log(sum);

        if(sum < lower){
            i++;
        } else if(sum > upper){
            j--;
        } else {
            i++;
            res++;
        }
    }

    console.log(res);
};

console.log(countFairPairs([0,1,7,4,4,5], 3, 6));