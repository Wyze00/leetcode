/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    if(nums.length == 1){
        return nums;
    }

    const n = Math.floor(nums.length/2);
    const l = sortArray(nums.slice(0,n));
    const r = sortArray(nums.slice(n, nums.length));
    const nA = [];

    while(l.length && r.length){

        if(l[0] < r[0]){
            nA.push(l.shift());
        } else {
            nA.push(r.shift());
        }
    }

    while(l.length){
        nA.push(l.shift());
        
    }

    while(r.length){
        nA.push(r.shift());
    }

    return nA;    
};

console.log(sortArray([5]));