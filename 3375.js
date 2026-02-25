/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
    let res = 0;
    const to100 = Array.from({length: 101}, () => true);
    to100[k] = false;

    for(const n of nums){

        if(n < k){
            return -1;
        }

        if(to100[n]){
            to100[n] = false;
            res++;
        }
    }

    return res;
};

console.log(minOperations([5,2,5,4,5], 2));