var prefixCount = function(words, pref) {
    
    let res = 0;
    const len = pref.length;

    for(let i = 0;i<words.length; i++){

        if(words[i].length < len) continue;
        if(words[i].startsWith(pref)) res++;
    }

    return res;
};

console.log(prefixCount(["pay","attention","practice","attend"], "at"));