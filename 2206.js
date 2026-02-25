/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    
    const myMap = new Map();

    for(const num of nums){
        myMap.set(num, (myMap.get(num) || 0) + 1);
    }

    for(const [k, v] of myMap.entries()){
        if(v % 2) return false;
    }

    return true;
};

console.log(divideArray([3,2,3,2,2,2]));