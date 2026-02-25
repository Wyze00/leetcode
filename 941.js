/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    

    let l = 0;
    let r = arr.length-1;
    
    while(l < arr.length-1){
        if(arr[l] >= arr[l+1]) break;
        l++;
    }
    
    while(r > 0){
        if(arr[r] >= arr[r-1]) break;
        r--;
    }

    if(l == arr.length-1 || r == 0) return false;
    return l == r;
};

console.log(validMountainArray([1,1,1,1,1,1,1,2,1]));