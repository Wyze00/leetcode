var countPalindromicSubsequence = function(s) {
    
    const myS = new Set();
    const first = new Map();
    const last = new Map();

    for(let i = s.length-1; i>-1; i--){
        if(last.has(s[i])) continue
        else last.set(s[i], i);
    }

    for(let i = 0; i<s.length-2; i++){

        if(first.has(s[i])) continue;
        else first.set(s[i], i);

        const tF = first.get(s[i]);
        const tL = last.get(s[i]);

        if(tF == tL) continue;

        for(let j = i+1; j<last.get(s[i]); j++){
            myS.add(s[tF] + s[j] + s[tL]);
        }
    }

   return myS.size;
};
