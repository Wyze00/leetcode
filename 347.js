var topKFrequent = function(nums, k) {

    let myMap = new Map();

    for(let i = 0; i<nums.length; i++){

        if(myMap.has(nums[i])){
            myMap.set(nums[i], myMap.get(nums[i]) + 1);
        } else {
            myMap.set(nums[i], 1);
        }
    }

    myMap = [...myMap].sort((a,b) => b[1]-a[1]);

    const res = [];
    for(let i = 0; i<k; i++){
        res.push(myMap[i][0])
    }

    return res;
};