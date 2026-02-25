// var xorAllNums = function(nums1, nums2) {

//     const xNy = [];
//     for(let i = 0; i<nums1.length; i++){

//         for(let j = 0; j<nums2.length; j++){
//             xNy.push(nums1[i] ^ nums2[j]);
//         }

//     }

//     let res = xNy[0];
//     for(let i = 1; i<xNy.length; i++) res ^= xNy[i];

//     return res;
// };


var xorAllNums = function(nums1, nums2) {

    let x1 = nums1[0];
    let x2 = nums2[0];

    for(let i = 1; i<nums1.length; i++) x1 ^= nums1[i];
    for(let i = 1; i<nums2.length; i++) x2 ^= nums2[i];

    return (nums2.length % 2 ? x1 : 0) ^ (nums1.length % 2 ? x2 : 0);
};



console.log(xorAllNums([1, 2], [3, 4]));

console.log(2 ^ 4);