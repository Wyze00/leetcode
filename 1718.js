/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    
    const res = Array(n * 2 - 1).fill(0);
    const len = res.length;
    const mySet = new Set();

    function backtrack(i){

        if(i == len) return true;

        for(let j = n; j >= 1; j--){

            // * Validate
            if(mySet.has(j)) continue;
            if(j > 1 && (i + j >= len || res[i+j])) continue;

            // * Try 
            mySet.add(j);
            res[i] = j;
            if(j > 1) res[i+j] = j;

            let k = i + 1;
            while(k < len && res[k]) k++;

            // * Recursive
            if(backtrack(k)) return true;

            // * Undo
            mySet.delete(j);
            res[i] = 0;
            if(j > 1) res[i+j] = 0;
        }
        
        return false;
    }

    backtrack(0);
    return res;
};





