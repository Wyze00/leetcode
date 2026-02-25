/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {

    const res = [];
    const fact = new Map();
    

    const alphabet = tiles.split("").sort();
    const mySet = new Set();

    function backtrack(alphabet, i, sub){

        if(i == tiles.length){

            const txt = sub.join("");
            if(!mySet.has(txt)){
                res.push(sub);
                mySet.add(txt);
            }
            return;
        }
        
        sub.push(alphabet[i]);
        backtrack(alphabet, i+1, sub.concat());
        sub.pop();
        backtrack(alphabet, i+1, sub.concat());
    }

    backtrack(alphabet, 0, []);

    let perm = 0;

    for(let i = 0; i<res.length; i++){

        const cache = {};

        for(const letter of res[i]){

            if(cache[letter]) cache[letter]++
            else cache[letter] = 1;
        }

        let total = faktorial(res[i].length);

        for(const times in cache){
           total /= faktorial(cache[times]);
        }

        perm += total;
    }

    function faktorial(n){

        if(n == 0 || n == 1) return 1;

        if(fact.has(n)) return fact.get(n)
        else fact.set(n, n * faktorial(n-1));
        
        return fact.get(n);
    }

    return perm-1;
};