/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    
    const sorted = nums.sort();
    let ctr = 0;

    for(let i = 0; i<sorted.length; i++){
        if(btoi(sorted[i]) != ctr) break;
        ctr++;
    }

    function btoi(n){

        let res = 0;

        for(let i = n.length-1, j = 0; i>-1; i--, j++){
            res += Math.pow(2, j) * Number(n[i]);
        }

        return res;
    }

    function itob(n){

        let res = "";

        while(n != 0){
            res = n % 2 + res;
            n = Math.floor(n / 2);
        }

        return res;
    }

    return itob(ctr).padStart(sorted[0].length, 0);
};