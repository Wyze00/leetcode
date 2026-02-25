var findThePrefixCommonArray = function(A, B) {
    
    const res = Array(A.length);
    const myMap = new Map();
    let pref = 0;

    for(let i = 0; i<A.length; i++){

        if(myMap.has(A[i])){

            const val = myMap.get(A[i]);

            if(val == 0){
                pref++;
                myMap.set(A[i], 1);
            }

        } else {
            myMap.set(A[i], 0);
        }

        if(myMap.has(B[i])){

            const val = myMap.get(B[i]);

            if(val == 0){
                pref++;
                myMap.set(B[i], 1);
            }

        } else {
            myMap.set(B[i], 0);
        }

        res[i] = pref;
    }
    
    return res;
};

console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4]));