/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  
    const res = Array(nums.length);
    let l = 0;
    let r = nums.length-1;
    let same = 0;

    for(let i = 0, j = nums.length-1; i < nums.length; i++, j--){

        if(nums[i] == pivot){
            same++;
        } 

        if(nums[i] < pivot){
            res[l++] = nums[i];
        }
        
        if(nums[j] > pivot){
            res[r--] = nums[j];
        }
    }

    for(let i = 0; i<same; i++){
        res[l++] = pivot;
    }

    return res;
};

console.log(pivotArray([9,12,5,10,14,3,10], 10));