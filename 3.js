/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longest = 0;
    let last = 0;
    const myMap = new Map();

    for(let i = 0; i<s.length; i++){

        if(myMap.has(s[i])){

            if(i - last > longest) longest = i - last;
            last = Math.max(last, myMap.get(s[i])+1);
            myMap.set(s[i], i);

        } else {
            myMap.set(s[i], i);
        }
    }

    return Math.max(s.length - last, longest);
};