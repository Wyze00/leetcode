/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {

    const myMap = new Map();
    const res = [];

    let l = r = 0;

    while(l < nums1.length || r < nums2.length){

        let temp;

        if(l < nums1.length && (r >= nums2.length || nums1[l][0] <= nums2[r][0])){
            temp = nums1[l];
            l++;
        } else {
            temp = nums2[r];
            r++
        }

        if(myMap.has(temp[0])){
            res[myMap.get(temp[0])][1] += temp[1];
        } else {
            myMap.set(temp[0], res.length);
            res.push(temp);
        }
    }

    return res;
};

console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1], [25, 299]]));