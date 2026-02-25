
var twoSum = function(numbers, target) {
    
    const len = numbers.length;

    for(let i = 0, j = len-1; i<j;){

        if(numbers[i] + numbers[j] == target) return [i+1 , j+1];
        else if(numbers[i] + numbers[j] < target) i++
        else j--;
    }  
};