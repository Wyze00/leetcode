// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation

function countPrimeSetBits(left: number, right: number): number {
    let count = 0;

    for (let i = left; i<=right; i++) {
        if (isPrime(countSetBit(i)))
            count++;
    }

    return count;
};

function countSetBit(n: number): number {
    let count = 0;
    
    while (n !== 0) {
        count += n & 1;
        n >>= 1;
    }

    return count;
}

function isPrime(n: number): boolean {
    if (n <= 1) 
        return false;

    if (n <= 3) 
        return true;

    if (n % 2 === 0 || n % 3 === 0) 
        return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) 
            return false;
    }

    return true;
}
