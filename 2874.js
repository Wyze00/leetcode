/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {

    const n = nums.length;
    const max = Array(nums.length);
    const min = Array(nums.length);

    let maxT = nums[n-1];
    let minT = nums[n-2];
    let res = 0;

    for(let i = n-3; i>-1; i--){


        if(nums[i+2] >= maxT){

            if(Math.abs(nums[i+2] - nums[i+1]) > Math.abs(maxT-minT)){
                maxT = nums[i+2];
                minT = nums[i+1];
            }
        }

        max[i] = maxT;
        min[i] = minT;
        res = Math.max((nums[i] - minT) * maxT);
    }


    

    console.log(max);
    console.log(min);

    return res;
};

console.log(maximumTripletValue([6,14,20,19,19,10,3,15,12,13,8,1,2,15,3]));