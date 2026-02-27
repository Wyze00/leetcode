// https://leetcode.com/problems/count-binary-substrings

function countBinarySubstrings(s: string): number { 
    let count = 0;
    let curNum = '';
    let curCount = 0;

    let i = 0;

    while (i < s.length-1) {
        curNum = s[i];

        // Hitung bit yang sama yang bersebelahan (curCount)
        while (s[i] === curNum) {
            i++;
            curCount++;
        }

        // Flip bit
        curNum = curNum === '0' ? '1' : '0';
        // Simpan i untuk iterasi selanjutnya dari awal flip bit
        let k = i;

        // Hitung flip bit yang bersebelahan ketika curCount masih > 0
        while (s[i] === curNum && curCount > 0) {
            count++;
            i++;
            curCount--;
        }

        // Reset curCount, ubah i jadi index awal flip bit
        curCount = 0;
        i = k;
    }

    return count;
};
