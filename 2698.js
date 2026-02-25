/**
 * @param {number} n
 * @return {number}
 */


var punishmentNumber = function(n){

    const checkSplitSum = (squareAsString, index, targetSum, d = 0) => {
        
        const length = squareAsString.length;

        if (index >= length) {    
            return targetSum === 0;
        }

        let currentSum = 0;

        for (let j = index; j < length; ++j) {
            
            currentSum = currentSum * 10 + Number(squareAsString[j]);

            if (currentSum > targetSum) {
                break;
            }

            if (checkSplitSum(squareAsString, j + 1, targetSum - currentSum, d+1)) {
                return true;
            }
        }

        return false;
    };
  
    let sumOfSpecialNumbers = 0;
  
    for (let i = 35; i <= n; ++i) {

        const square = i * i; 
        const squareAsString = square.toString(); 
      
        if (checkSplitSum(squareAsString, 0, i)) {
            sumOfSpecialNumbers += square; 
        }
    }
  
    return sumOfSpecialNumbers;
}