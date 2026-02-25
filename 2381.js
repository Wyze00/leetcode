// var shiftingLetters = function(s, shifts) {
    
//     const res = s.split('').map((e) => e.charCodeAt(0));
//     let all = 0;

//     for(let i = 0; i<shifts.length; i++){

//         const pOm = shifts[i][2] == 1 ? 1 : -1;
//         const start = shifts[i][0];
//         const end = shifts[i][1];

//         if(start == 0 && end == s.length-1){
//             all += pOm;
//             continue;
//         }        

//         for(let j = start; j <= end; j++){
//             res[j] += pOm;
//         }
//     }

//     return res.map((e) => {

//         e += all;

//         while(e < 97)e += 26;
//         while(e > 122) e -= 26;
//         return String.fromCharCode(e);

//     }).join('');
// };

var shiftingLetters = function(s, shifts) {
    
    const res = Array(s.length + 1).fill(0);

    for(let i = 0; i<shifts.length; i++){

        let [start, end, pOm] = shifts[i];

        pOm = pOm == 1 ? 1 : -1;
        res[start] += pOm;
        res[end + 1] -= pOm;
    }

    let track = 0;
    let result = "";

    for(let i = 0; i<s.length; i++){

        track += res[i];

        let char = s[i].charCodeAt() + track;
        while(char < 97)char += 26;
        while(char > 122) char -= 26;
        result += String.fromCharCode(char);
    }

    return result;
};



console.log(shiftingLetters("abc", [[0,1,0],[1,2,1],[0,2,1]]));