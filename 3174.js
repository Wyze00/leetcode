/**
 * @param {string} 
 * @return {string}
 */

var clearDigits = function(s) {
    
    const stack = Array(s.length);
    let ctr = 0;

    for(let i = 0; i<s.length; i++){

        if(s[i].match(/\d/)) --ctr;
        else stack[ctr++] = s[i];
    }

    for(let i = 0; i<ctr; i++){
        console.log(stack[i]);
    }


    return stack.join('');
};
