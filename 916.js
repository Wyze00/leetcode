var wordSubsets = function(words1, words2) {

    const res = [];
    let long = 0;
    const len = words2.length;
    let myMap = new Map();

    for(let i = 0; i<len; i++){

        if(words2[i].length > long) long = words2[i].length;

        let temp = new Map();

        for(let j = 0; j<words2[i].length; j++){

            if(temp.has(words2[i][j])){
                temp.set(words2[i][j], temp.get(words2[i][j]) + 1);
            } else {
                temp.set(words2[i][j], 1);
            }
        }

        temp = [...temp];

        for(let j = 0; j<temp.length; j++){

            if(myMap.has(temp[j][0])){

                const gt = myMap.get(temp[j][0]);

                if(temp[j][1] > gt){
                    myMap.set(temp[j][0], temp[j][1]);
                }

            } else {
                myMap.set(temp[j][0], temp[j][1]);
            }
        }
    }

    myMap = [...myMap];
    
    for(let i = 0; i<words1.length; i++){

        if(words1[i].length < long) continue;

        const temp = new Map();

        for(let j = 0; j<words1[i].length; j++){

            if(temp.has(words1[i][j])){
                temp.set(words1[i][j], temp.get(words1[i][j]) + 1);
            } else {
                temp.set(words1[i][j], 1);
            }
        }

        let ctr = 0;
        for(let j = 0; j<myMap.length; j++){

            if(temp.has(myMap[j][0])){
                if(temp.get(myMap[j][0]) >= myMap[j][1]) ctr++;
            } else {
                break;
            }
        }

        if(ctr == myMap.length) res.push(words1[i]);
    }

    return res;
};

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["lo","eo"]));
