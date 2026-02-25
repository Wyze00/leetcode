/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {

    const myMap = new Map([['a', 0], ['i', 0], ['u', 0], ['e', 0], ['o', 0]]);
    const myReg= new RegExp(/[aiueo]/);
    let v = 0;
    let c = 0;
    let res = 0;

    // init
    for(let i = 0; i < 5 + k; i++){

        if(myReg.test(word[i])){

            if(!myMap.get(word[i])){
                v++;
            } 

            myMap.set(word[i], myMap.get(word[i]) + 1);

        } else {
            c++;
        }
    }

    if(v == 5 && c == k ) res++;

    // logic

    let i = 0;
    let j = 5 + k;

    while(j < word.length){

        while(j < word.length && c != k + 1){

            if(myReg.test(word[j])){
    
                const get = myMap.get(word[j]) + 1;
    
                if(get == 1){
                    v++;
                }
    
                myMap.set(word[j], get);
    
            } else {
                c++;
            }
    
            if(v == 5 && c == k) res++;
            j++;
        }
    
        while(c != k && j != word.length || c == k && j - i > 5 + k){
    
            if(myReg.test(word[i])){
    
                const get = myMap.get(word[i]) - 1;
    
                if(get == 0){
                    v--;
                }
    
                myMap.set(word[i], get);
    
            } else {
                c--;
            }
    
            if(v == 5 && c == k) res++;
            i++;
        }
    }

    return res;
};

console.log(countOfSubstrings("aiueoee", 0));