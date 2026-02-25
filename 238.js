var productExceptSelf = function(nums) {
    
    const res = Array(nums.length);
    const left = Array(nums.length + 2);
    const right = Array(nums.length + 2);
    left[0] = left[nums.length+1] = right[0] = right[nums.length+1] = 1;

    let lSum = 1;
    for(let i = 0; i<nums.length; i++){
        lSum *= nums[i];
        left[i+1] = lSum;
    }

    let rSum = 1;
    for(let i = nums.length-1; i>-1; i--){
        rSum *= nums[i];
        right[i+1] = rSum;
    }

    for(let i = 0; i<nums.length; i++){

        const temp = left[i-1+1] * right[i+1+1];
        res[i] = temp == 0 ? 0 : temp;
    }
    
    return res;
};
