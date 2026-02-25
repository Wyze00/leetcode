/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n, str = "1") {
    
    if(n == 1){
        return str;
    }

    let newStr = "";
    let same = 1;
    let num = str[0];

    for(let i = 1; i<str.length; i++){

        if(str[i] == num){
            same++;
        } else {
            newStr += same + num;
            num = str[i];
            same = 1;
        }
    }

    newStr += same + num;
    return countAndSay(n-1, newStr);
};

console.log(countAndSay(2));