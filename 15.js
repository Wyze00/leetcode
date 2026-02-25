// var threeSum = function(nums) {
    
//     const res = [];
//     const mySet = new Set();

//     for(let i = 0; i<nums.length-2; i++){

//         if(mySet.has(nums[i])){
//             continue;
//         } else {
//             mySet.add(nums[i]);
//         }

//         for(let j = i+1; j<nums.length-1; j++){

//             for(let k = j+1; k<nums.length; k++){

//                 if(nums[i] + nums[j] + nums[k] === 0){

//                     const tmp = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);

//                     if(!mySet.has(tmp.join(''))){

//                         mySet.add(tmp.join(''))
//                         res.push([nums[i], nums[j], nums[k]]);
//                     }
//                 }
//             }
//         }
//     }

//     return res;
// };

var threeSum = function(nums) {

    nums = nums.sort((a,b) => a-b);
    const res = [];
    const len = nums.length;

    for(let i = 0; i<len-2 && nums[i] <= 0; i++){

        if(i > 0 && nums[i] == nums[i-1]) continue;

        let l = i+1;
        let r = len-1;

        while(l < r){

            const tmp = nums[i] + nums[l] + nums[r];

            if(tmp < 0){
                l++;
            } else if(tmp > 0){
                r--;
            } else {

                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;

                while(l < r && nums[l] == nums[l-1]){
                    l++;
                }

                while(l < r && nums[r] == nums[r+1]){
                    r--;
                }
            }
        }

    }

    return res;
};


console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));

