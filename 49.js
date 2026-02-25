var groupAnagrams = function(strs) {

    const res = new Map();


    for(let i = 0; i<strs.length; i++){

        const lex = strs[i].split('').sort().join('');

        if(res.has(lex)){
            const get = res.get(lex);
            get.push(strs[i]);
            res.set(lex, get);
        } else {
            res.set(lex, [strs[i]]);
        }
    }

    return([...res].map((e)=>e[1]));
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

