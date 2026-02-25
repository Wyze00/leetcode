/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    const phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    // Konversi digit ke nomor
    let letter = [];
    const n = digits.length;

    digits.split("").forEach((e) => {
        letter.push(phone[e]);
    })
    
    // logic
    const res = [];
    loop()

    function loop(str = "", i = 0){

        if(i == n){
            res.push(str);
            return;
        }

        letter[i].split("").forEach((e) => {
            loop(str + e, i+1);
        })
    }

    return res;
};

console.log(letterCombinations(""));