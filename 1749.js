/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    
    let globalMax = -Number.MAX_SAFE_INTEGER;
    let globalMin = Number.MAX_SAFE_INTEGER;
    let cur = 0;

    // * Find the max value
    for(const n of nums){
        cur = Math.max(n, cur + n);
        if(cur > globalMax) globalMax = cur;
    }
    cur = 0;

    //  * Find the min value
    for(const n of nums){
        cur = Math.min(n, cur + n);
        if(cur < globalMin) globalMin = cur;
    }
    
    return Math.max(globalMax, Math.abs(globalMin));
};
