/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    const res = Array(nums1.length + nums2.length);
    let n = 0;
    let m = 0;
    let ctr = 0;


    while(n < nums1.length && m < nums2.length){

        if(nums1[n] < nums2[m]){
            res[ctr++] = nums1[n++];
        } else {
            res[ctr++] = nums2[m++];
        }
    }

    while(n < nums1.length) res[ctr++] = nums1[n++];
    while(m < nums2.length) res[ctr++] = nums2[m++];

    return res.length % 2 ? res[(res.length-1) / 2] : (res[res.length/2] + res[res.length/2-1]) / 2;
};

console.log(0/2);