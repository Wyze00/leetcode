/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    const stack = [];

    for(const c of s){

        if(c == ']'){

            const queue = [];
            const queueNum = [];

            let pop = stack.pop();

            while(!pop.match(/\d/)){
                
                if(pop != "[") queue.unshift(pop);
                pop = stack.pop();
            }

            while(true){

                queueNum.unshift(pop);

                if(stack.length !== 0 && stack[stack.length-1].match(/\d/)){
                    pop = stack.pop();
                } else {
                    break;
                }
            }

            stack.push(queue.join('').repeat(queueNum.join('')));
        } else {
            stack.push(c);
        }  
    }

    return stack.join('');
};  

console.log(decodeString("20[er]"));