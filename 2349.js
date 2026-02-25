// var NumberContainers = function() {
//     this.container = new Map();
//     this.first = new Map();
// };

// /** 
//  * @param {number} index 
//  * @param {number} number
//  * @return {void}
//  */
// NumberContainers.prototype.change = function(index, number) {

//     const num = this.container.get(index) || "empty";

//     if(num != "empty"){
//         this.first.get(num).delete(index);
//     }

//     this.container.set(index, number);

//     if(this.first.has(number)){
//         this.first.get(number).add(index);
//     } else {
//         this.first.set(number, new Set().add(index));
//     }
// };

// /** 
//  * @param {number} number
//  * @return {number}
//  */
// NumberContainers.prototype.find = function(number) {
   
//     if(!this.first.get(number) || this.first.get(number).size == 0) return -1;
//     return Math.min(...this.first.get(number));
// };


var NumberContainers = function() {
    this.container = new Map(); // Menyimpan angka pada indeks tertentu
    this.first = new Map(); // Menyimpan Min-Heap untuk setiap angka
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    // Jika indeks sudah memiliki angka sebelumnya, hapus dari Min-Heap angka tersebut
    if (this.container.has(index)) {
        const prevNumber = this.container.get(index);
        const prevHeap = this.first.get(prevNumber);
        prevHeap.delete(index); // Hapus indeks dari Min-Heap sebelumnya
    }

    // Update angka pada indeks
    this.container.set(index, number);

    // Tambahkan indeks ke Min-Heap angka baru
    if (!this.first.has(number)) {
        this.first.set(number, new MinHeap());
    }
    this.first.get(number).insert(index);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.first.has(number) || this.first.get(number).isEmpty()) {
        return -1;
    }
    return this.first.get(number).getMin();
};

// Implementasi Min-Heap yang Diperbaiki
class MinHeap {
    constructor() {
        this.heap = [];
        this.valueToIndex = new Map(); // Menyimpan posisi nilai di heap
    }

    insert(value) {
        this.heap.push(value);
        this.valueToIndex.set(value, this.heap.length - 1);
        this.bubbleUp(this.heap.length - 1);
    }

    delete(value) {
        const index = this.valueToIndex.get(value);
        if (index === undefined) return;

        // Swap dengan elemen terakhir
        this.swap(index, this.heap.length - 1);

        // Hapus elemen terakhir
        this.valueToIndex.delete(value);
        this.heap.pop();

        // Reheapify
        if (index < this.heap.length) {
            this.bubbleUp(index);
            this.bubbleDown(index);
        }
    }

    getMin() {
        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            this.swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    swap(i, j) {
        // Update valueToIndex
        this.valueToIndex.set(this.heap[i], j);
        this.valueToIndex.set(this.heap[j], i);

        // Swap elemen di heap
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
