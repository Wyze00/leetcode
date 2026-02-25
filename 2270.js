var waysToSplitArray = function(nums) {
  
    let left = 0;
    let right = nums.reduce((a,c) => a + c, 0);
    let res = 0;

    for(let i = 0; i<nums.length-1; i++){

        left += nums[i];
        right -= nums[i];

        if(left >= right) res++;
    }
    
    return res;
};

console.log(waysToSplitArray([2,3, 1, 0]));