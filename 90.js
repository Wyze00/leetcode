/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  
    nums = nums.sort((a,b)=>a-b);
    const res = [];
    const mySet = new Set();

    function backtrack(nums, i, sub){

        if(i == nums.length){

            const txt = sub.join("");
            if(!mySet.has(txt)){
                mySet.add(txt);
                res.push(sub);
            }

            return;
        }

        sub.push(nums[i]);
        backtrack(nums, i+1, sub.concat());
        sub.pop();
        backtrack(nums, i+1, sub.concat());
    }

    backtrack(nums, 0, []);
    return res;
};
