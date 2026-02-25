function countOneBit(num: number): number{
    let counter = 0;

    // Menggunakan algoritma Brian Kernighan dimana setiap kali melakukan (num & (num-1)), Least Significant Bitnya akan menjadi 0
    while(num != 0){
        num = num & (num - 1);
        counter++;
    }

    return counter;
}

function sortByBits(arr: number[]): number[] {
    // Bikin map untuk nampung nomor di array dan jumlah bit 1 nya
    const mapBit = new Map<number,number>();
    
    // Loop setiap element pada arr, masukan ke map
    for (const num of arr)
        mapBit.set(num, countOneBit(num));
    
   // Kalo jumlah bit 1 sama, sort bedasarkan nilai aslinya. Jika tidak sort bedasarkan jumlah bit 1
   return arr.sort((a, b) => {
        const bA: number = mapBit.get(a)!;
        const bB: number = mapBit.get(b)!;

        if(bA == bB)
            return a-b;

        return bA - bB;
    })
};