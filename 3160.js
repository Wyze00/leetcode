/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {

    const ball = Array(limit + 1);
    const res = Array(queries.length);
    const myMap = new Map();
    let before = 0;


    for(let i = 0; i<queries.length; i++){

        const [b, c] = queries[i];
        const tmp = ball[b];
        
        if(tmp == undefined){
            ball[b] = c;
        } else {

            const tmpMap = myMap.get(tmp) - 1;
            myMap.set(tmp, tmpMap);
            if(tmpMap == 0) before--;
            ball[b] = c;
        }

        if(myMap.has(c)){

            const asd = myMap.get(c);
            if(asd == 0) before++;
            myMap.set(c, asd + 1);
        } else {
            myMap.set(c, 1);
            before++;
        }

        res[i] = before;
    }

    return res;
};