var check = function(nums){

    const arr = nums.concat().sort((a,b) => a-b);    
    let last = nums.indexOf(arr[0]);
    let index = 0;
    let len = nums.length-1;

    while(len > 0 && arr[0] == nums[len]){
        last = len--;
    }

    for(let i = last; i<nums.length; i++){
        if(nums[i] != arr[index++]) return false;
    }

    for(let i = 0; i<last; i++){
        if(nums[i] != arr[index++]) return false;
    }

    return true;
} 