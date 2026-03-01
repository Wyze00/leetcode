// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers

function minPartitions(n: string): number {
    let max = 0;

    for (let i = 0 ; i<n.length ; i++) {
        if (max === 9) {
            return 9;
        } 

        const currentNumber: number = Number(n[i]);

        if (currentNumber > max) {
            max = currentNumber
        } 
    } 

    return max;
};
