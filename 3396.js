/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

    const n = Array.from({length: 101}, (_)=>0);
    let multiple = 0;
    let res = 0;

    // Loop through nums, map all the element
    for(const num of nums){

        n[num]++

        if(n[num] > 1){
            multiple++;
        }
    }    

    // looping higga multiple == 0
    while(multiple != 0){

        if(nums.length < 3){

            if(multiple != 0){
                res++;
            }

            break;
        }

        let count = 0;

        while(count++ < 3){

            let num = nums.shift();

            if(n[num] > 1){
                multiple--;
            }

            n[num]--;
        }

        res++;
    }

    return res;
};

console.log(minimumOperations([1,2,3,4,2,3,3,5,7]));