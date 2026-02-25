/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {

    let max = -1;

    for(let i = arr.length-1; i>-1; i--){

        const temp = arr[i];
        arr[i] = max;
        if(temp > max) max = temp;
    }
    
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]));