var minimumLength = function(s) {

    const alp = Array(26).fill(0);
    let res = 0;

    for(let i = 0; i<s.length; i++){
        alp[s[i].charCodeAt(0) - 97]++;
    }

    for(let i = 0; i<alp.length; i++){

        if(alp[i] == 0) continue;
        res += alp[i] % 2 == 0 ? 2 : 1;
    }
    
    return res;
};

console.log(minimumLength("abaacbcbb"));