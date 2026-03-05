// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description

function minOperations(s: string): number {
    let oneFirst = 0;
    let zeroFirst = 0;
    let even = true;

    // Loop string
    for (const value of s) {

        // Kalo berada di index genap
        if (even) {

            // Kalo nilainya 0 berarti yang mulai bit 1 dulu harus ubah nilainya ke 1
            if (value === '0') {
                oneFirst++;
            }  else {
                zeroFirst++;
            }
        } else {

            // Kalo nilainya 1 berarti yang mulai bit 0 harus ubah nilainya ke 0
            if (value === '0') {
                zeroFirst++;
            } else {
                oneFirst++;
            }
        }

        // Tracking index genap / ganjil
        even = !even;
    }

    // Return yang flipnya paling dikit
    return Math.min(oneFirst, zeroFirst);
};