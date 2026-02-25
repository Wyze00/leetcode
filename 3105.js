
var longestMonotonicSubarray = function(nums) {

   let longest = 1;
   
   for(let i  = 0; i<nums.length-1; i++){

        let tmp = 1;
        while(i < nums.length-1 && nums[i] < nums[i+1]){
            i++;
            tmp++;
        }

        if(tmp > longest) longest = tmp;
   }

   for(let i  = 0; i<nums.length-1; i++){

        let tmp = 1;
        while(i < nums.length-1 && nums[i] > nums[i+1]){
            i++;
            tmp++;
        }

        if(tmp > longest) longest = tmp;
    }
    
    return longest;
};