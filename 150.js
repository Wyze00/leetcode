/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    const stack = [];

    for(let i = 0; i<tokens.length; i++){

        const charCode = tokens[i].charCodeAt(tokens[i].length-1);

        if(charCode < 48 || charCode > 57){

            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(calc(Number(operand1), Number(operand2), tokens[i]))

        } else {
            stack.push(tokens[i]);
        }
    }

    function calc(o1, o2, op){

        if(op == "+"){
            return o1 + o2;
        } else if(op == "-"){
            return o1 - o2;
        } else if(op == "*"){
            return o1 * o2;
        } else {
            return Math.trunc(o1 / o2);
        }
    }

    return stack[0];
};