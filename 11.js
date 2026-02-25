
var maxArea = function(height) {

    let max = 0;

    let l = 0;
    let r = height.length-1;

    while(l < r){

        const min = Math.min(height[l], height[r]);
        max = Math.max(max, min * (r-l));

        if(height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }

    return max;
};

console.log(maxArea([1,1]));