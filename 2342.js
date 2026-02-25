/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    
    const bucket = new Map();
    let res = -1;

    for(let i = 0; i<nums.length; i++){

        let n = nums[i];
        let sum = 0;

        while(n != 0){
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        if(!bucket.has(sum)) bucket.set(sum, []);
        bucket.get(sum).push(nums[i]);
    }

    bucket.forEach((e) => {

        if(e.length != 1){

            const tmp = [Math.max(e[0], e[1]), Math.min(e[0], e[1])];

            for(let i = 2; i<e.length; i++){

                if(e[i] > tmp[1]) tmp[1] = e[i];
                if(tmp[1] > tmp[0]) [tmp[0], tmp[1]] = [tmp[1], tmp[0]];
            }

            const sum = tmp[0] + tmp[1];
            if(sum > res) res = sum;
        }
    })
    
    return res;
};