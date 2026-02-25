/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    
    let res = 0;

    let nZ = 0;
    for(const num of nums) if(num) nZ++;

    let i = 0;

    while(nZ != 0 && i < queries.length){

        let [l, r, val] = queries[i];

        for(; l <= r; l++){

            if(!nums[l]) continue;

            const sub = nums[l] - val;

            if(sub <= 0){
                nZ--;
                nums[l] = 0;
            } else {
                nums[l] = sub;
            }
        }

        res++;
        i++;
    }

    return nZ ? -1 : res;
};

var minZeroArray = function(nums, queries) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0); // Difference array
    let res = 0;

    // Hitung jumlah elemen non-nol awal
    let nonZeroCount = nums.filter(num => num !== 0).length;

    for (const [l, r, val] of queries) {
        // Update difference array
        diff[l] += val;
        if (r + 1 < n) {
            diff[r + 1] -= val;
        }

        // Hitung perubahan pada elemen non-nol
        for (let i = l; i <= r; i++) {
            if (nums[i] !== 0) {
                nums[i] -= val;
                if (nums[i] <= 0) {
                    nonZeroCount--;
                    nums[i] = 0;
                }
            }
        }

        res++; // Tambahkan operasi
        if (nonZeroCount === 0) break; // Jika semua elemen sudah nol, hentikan
    }

    return nonZeroCount === 0 ? res : -1;
};

console.log(minZeroArray([0], [[0,2,1],[0,2,1],[1,1,3]]));