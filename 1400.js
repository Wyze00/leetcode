var canConstruct = function(s, k) {

    if(s.length < k) return false;

    let res = new Map();

    for(let i = 0; i<s.length; i++){

        if(res.has(s[i])){
            res.set(s[i], res.get(s[i]) + 1);
        } else {
            res.set(s[i], 1);
        }
    }
    
    res = [...res];

    let odd = 0;

    for(let i  = 0; i<res.length; i++){
        if(res[i][1] % 2 == 1) odd++;
    }

    return odd <= k;
};

console.log(canConstruct("annabelle", 2));