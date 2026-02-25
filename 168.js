/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {

    let res = [];

    while(columnNumber != 0){

        res.push(columnNumber % 26);
        columnNumber = Math.floor(columnNumber / 26);
    }

    return res;
};

// console.log(String.fromCharCode(64 + 26));

// FF

function conv(num, base){

    let res = "";

    while(num != 0){

        res = num % base + res;
        num = Math.floor(num / base);
    }

    return res;
}

console.log(conv(26,26));