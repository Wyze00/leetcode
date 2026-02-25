/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    
    if(k == 1) return Math.min(...nums);

    const n = nums.length;
    const arrMin = Array(n);
    let minNow = nums[n-1];

    for(let i = n-1; i > -1; i--){
        minNow = Math.min(nums[i], minNow);
        arrMin[i] = minNow;
    }

    let res = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < n-k; i++){

        if(i + (2 * (k-1)) >= n) break;
        res = Math.min(res, Math.max(nums[i], theMax(i, k-1)));
    }

    return res == Number.MAX_SAFE_INTEGER ? nums[0] : res;

    function theMax(i, k){

        if(k == 0){
            return arrMin[i];
        }

        return Math.max(arrMin[i+2], theMax(i+2, k-1));
    }
};

console.log(minCapability([9,6,20,21,8], 2));