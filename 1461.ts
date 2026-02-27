// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k

function hasAllCodes(s: string, k: number): boolean {
    // Base case kalau k lebih besar dari length string maka mustahil bikin substring
    if (k > s.length) 
        return false;
    
    const kSet = new Set<string>();

    // Loop ambil setiap substring yang memungkinkan
    for (let i = 0; i<s.length-k+1; i++) {
        const sub: string = s.substring(i, i+k);

        // Kalo sudah pernah dikunjungi, langsung skip. Kalau tidak add ke set
        if (kSet.has(sub))
            continue;

        kSet.add(sub);
    }

    // Semua subset k binary itu sama dengan 2^k
    return kSet.size == 2 ** k;
};
