/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

    const num = Array.from({length: n}, (_,i)=>i+1);
    const tmp = [];
    const res = [];

    for(let i = 0; i<num.length-k+1; i++){

        tmp.push(num[i]);
        again(i+1);
        tmp.pop();
    }

    function again(i){

        if(tmp.length == k){
            res.push(tmp.concat());
            return;
        }

        for(; i<num.length; i++){

            tmp.push(num[i]);
            again(i+1);
            tmp.pop();
        }
    }

    return res;
};
