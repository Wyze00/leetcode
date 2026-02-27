// https://leetcode.com/problems/binary-gap

function binaryGap(n: number): number {
    let longestGap = 0;
    let currentGap = 0;
    let firstOne = false;

    while (n !== 0) {

        // Cek LSB kalo satu
        if ((n & 1) === 1) {

            // Kalo satu bukan pertama kali dan gap lebih besar
            if (firstOne && currentGap > longestGap) { 
                longestGap = currentGap;
                currentGap = 0;
            } else {
                // Set satu pertama kali dan reset currentGap
                firstOne = true;
                currentGap = 0;
            }
        }

        // Right shift == bagi 2
        n >>= 1;
        currentGap++;
    }

    return longestGap;
};
