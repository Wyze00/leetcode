// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/

function numSteps(s: string): number {
    const len = s.length;
    let step = 0;
    let num: bigint = 0n;

    // Convert binray string into bigint
    for (let i = len-1 ; i>=0 ; i--) {
        if(s[i] === '1')
            num += BigInt(Math.pow(2, len-i-1));
    } 

    while (num !== 1n) {
        step++;

        // Num is even ? divide by 2 : add 1
        num = (num % 2n) === 0n ? num / 2n : num + 1n;
    } 

    return step;
};

// Other solution 

function numSteps2(str: string): number {
    let steps: number = 0;

    // Bekerja sebagai carry dimana 
    let carry: boolean = false;
    
    for(let i = str.length - 1; i > 0; i--) {
        let currBit = str[i];
        
        // Bit murni 0 (genap) tanpa carry atau bit 1 tambah carry jadi genap tinggal dibagi 2 (1 step) 
        if((currBit === '0' && !carry) || (currBit === '1' && carry)) {
            steps++;
        } else {
            // Bit 1 tanpa carry (ganjil) atau bit 0 dengan carry jadi ganjil haris ditambah 1 baru dibagi 2 (2 step)
            carry = true;
            steps += 2;
        }
    }
    
    // Kalo bawa carry maka hasilnya genap dan harus dibagi 2 agar menjadi 1 (1 step tambahan)
    if(carry) steps++;
    
    return steps;
};