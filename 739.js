/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
    const res = Array(temperatures.length).fill(0);
    const stack = [];

    for(let i = 0; i<temperatures.length-1; i++){

        stack.push(i);

        while(temperatures[stack.at(-1)] < temperatures[i+1]){

            const idx = stack.pop();
            res[idx] = i+1 - idx;
        }
    }

    return res;
};
