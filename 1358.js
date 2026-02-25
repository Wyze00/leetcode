/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    
    const myMap = new Map(s.ent)
    const fixed = new Set(s).size;
    let curr = 0;
    let res = 0;

    let l = 0;
    let r = 0;

    while(r <= s.length){

        if(r < s.length){

            if(!myMap.has(s[r])){
                myMap.set(s[r], 0);
            }
    
            const get = myMap.get(s[r]) + 1;
            myMap.set(s[r], get);
    
            if(get == 1){
                curr++;
            }
        }
    
        r++;

        while(curr == fixed && l < r - fixed + 1){

            res += s.length - r + 1;

            const get = myMap.get(s[l]) - 1;
            myMap.set(s[r], get);
            
            if(get == 0){
                curr--;
            }
            
            l++;
        }

    }

    return res;
};

var numberOfSubstrings = function(s) {
    const count = { a: 0, b: 0, c: 0 }; 
    let res = 0; 
    let left = 0; 

    for (let right = 0; right < s.length; right++) {

        count[s[right]]++;

        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {

            res += s.length - right;

            count[s[left]]--;
            left++; 
        }
    }

    return res;
};

console.log(numberOfSubstrings("ababbbc"));