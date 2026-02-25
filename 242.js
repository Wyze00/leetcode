// var isAnagram = function(s, t) {

//     s = s.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');
//     t = t.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)).join('');

//     return  s == t;
// };

var isAnagram = function(s, t) {

    if(s.length != t.length) return false;
    const sAlp = Array(26).fill(0);
    const tAlp = Array(26).fill(0);

    for(let i = 0; i<s.length; i++) sAlp[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for(let i = 0; i<t.length; i++) tAlp[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    for(let i = 0; i<sAlp.length; i++) if(sAlp[i] != tAlp[i]) return false;

    return true;
};

console.log(isAnagram("anagram", "d"));