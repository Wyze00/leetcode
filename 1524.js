    /**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    
    let res = 0;

    const prefix = new Map();
    let pre = 0;
    for(let i = 0; i<arr.length; i++){
        pre += arr[i];
        prefix.set(i+1, pre);
    }

    function sliding(depth = 0){

        if(depth == arr.length+1){
            return;
        }

        let init = prefix.get(depth);
        if(init % 2) res++;

        for(let i = depth, j = 0; i<arr.length; i++, j++){

            init -= arr[j] + arr[i];
            if(init % 2) res++;
        }

        sliding(depth + 1);
    }

    sliding(1);
    return res;
};

var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7; 
    let prefixSum = 0;
    let oddCount = 0; 
    let evenCount = 1; 
    let result = 0;

    for (const num of arr) {
        prefixSum += num; 
        if (prefixSum % 2 === 1) {
            result = (result + evenCount) % MOD;
            oddCount++; 
        } else {
            result = (result + oddCount) % MOD;
            evenCount++; 
        }
    }

    return result;
};

console.log(numOfSubarrays([1,2,3,4,5,6,7]));