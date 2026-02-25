/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    
    const myMap = new Map();
    let res = 0;

    for(let i = 0; i<nums.length-1; i++){

        for(let j = i+1; j<nums.length; j++){

            const sum = nums[i] * nums[j];

            if(myMap.has(sum)){
                myMap.set(sum, myMap.get(sum) + 1);
            } else {
                myMap.set(sum, 1);
            }
        }
    }

    const pairs = [...myMap];

    for(let i = 0; i<pairs.length; i++){

        res += 8 * (pairs[i][1] * (pairs[i][1] - 1) / 2);
    }

    return res;
};

console.log(tupleSameProduct([1,2,4,5,10]));