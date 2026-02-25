// var canBeValid = function(s, locked) {

//     if(s.length % 2 == 1 || s[0] === ')' && locked[0] == '1' || s[s.length-1] === '(' && locked[s.length-1] == '1') return false;

//     const stack = [];
//     let last = 0;
//     let right = 0;

//     for(let i = 0; i<s.length; i++, right++){

//         if(locked[i] === '0'){stack.push(0)}
//         else if(s[i] === '(' && locked[i] == '1'){stack.push(1);last = 0; right = 0} 
//         else {

//             if(stack.length == 0) return false;
//             if(last === -1){
//                 stack.pop();
//                 continue;
//             }

//             for(let j = 0; j<(right * 2) - 1; j++){
//                 if(stack.length == 0) return false;
//                 stack.pop();
//             }

//             last = -1;
//             right = 0;
//             for(let j = stack.length-1; j>-1; j--){
//                 if(stack[j][0] == 1){
//                     last = 0;
//                     break;
//                 }
//                 right++;
//             }
//         }
//     }

//     let bal = 0;

//     for(let i = 0; i<stack.length; i+=2){

//         if(Math.abs(stack[i] - stack[i+1]) == 1) continue
//         else if(stack[i] === 1 && stack[i+1] === 1) bal +=2
//         else if(bal != 0) bal -= 2;

//     }
    
//     return bal == 0;
// };

var canBeValid = function(s, locked){

    let n = s.length; 

    if (n % 2 !== 0) {
        return false;
    }

    let open = 0; 
    for (let i = 0; i < n; ++i) {

        if (s[i] === '(' || locked[i] === '0') {
            open++;
        } else if (open > 0) { 
            open--;
        } else {
            return false; 
        }
    }

    let close = 0; 
    for (let i = n - 1; i >= 0; --i) {
        
        if (s[i] === ')' || locked[i] === '0') {
            close++;
        } else if (close > 0) { 
            close--;
        } else {
            return false; 
        }
    }

    return true;
}

console.log(Math.E ** (Math.log(16) * 0.5));
console.log(Math.exp(Math.log(4) * 0.5));