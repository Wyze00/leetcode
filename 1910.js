/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    const stack = [];
    const len = part.length;

    for(let i = 0; i<s.length; i++){

        stack.push(s[i]);

        if(stack.length >= len){
            if(stack.slice(-len).join('') == part) stack.splice(stack.length-len, len);
        }
    }

    return stack.join('');
};