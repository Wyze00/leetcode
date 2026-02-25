/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {

    if(!pattern.length) return "";
    const res = [];
    const num = Array(10).fill(true);
    let i = 0;
    const len = pattern.length;
    console.log(num);
    while(true){

        let letI = 0;
        while(i < len && pattern[i] == "I"){
            i++;
            letI++;
        }

        if(i == len) letI++;

        for(let j = 1; j<10; j++){

            if(letI == 0) break;

            if(num[j]){
                res.push(j);
                letI--;
                num[j] = false;
            }
        }

        if(i == len) break;

        let letD = 0;
        while(i < len && pattern[i] == "D"){
            i++;
            letD++;
        }

        for(let j = 1; j<10; j++){

            if(num[j] && num[j+letD]){

                while(letD){
                    res.push(j+letD);
                    num[j+letD] = false;
                    letD--;
                }

                if(i == len) res.push(j);
                break;
            }
        }

        if(i == len) break;
    }

    return res.join("");
};