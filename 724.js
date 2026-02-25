/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    const tempL = [];
    const tempR = [];

    for(let i = 0, j = nums.length-1, sumL = sumR = 0; i<nums.length; i++, j--){
        tempL.push(sumL);
        tempR.unshift(sumR);

        sumL += nums[i];
        sumR += nums[j];
    }

    for(let i = 0; i<tempL.length; i++){
        if(tempL[i] == tempR[i]) return i;
    }

    return -1;  
};

console.log(pivotIndex([-1,-1,-1,-1,-1]));