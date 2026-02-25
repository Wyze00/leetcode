var longestConsecutive = function(nums) {
    
    let mySet = new Set();
    for(const n of nums) mySet.add(n);
    mySet = [...mySet.values()].sort((a,b) => a-b);

    let res = 0;

    for(let i = 1; i<mySet.length; i++){
        
        let temp = 1;
        while(i < mySet.length && mySet[i] - mySet[i-1] == 1){
            temp++;
            i++;
        }    

        if(temp > res) res = temp;
    }

    return res;
};

console.log(longestConsecutive([100,4,200,1,3,2]));