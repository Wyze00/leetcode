class MyMinHeap {

    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.bubbleUp(this.heap.length-1);
    }

    getMin(){

        if(this.getLength() == 0) return null;

        const min = this.heap[0];
        const last = this.heap.pop();

        if(this.getLength() > 0){
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return min;
    }

    bubbleUp(i){
        while(i > 0){
            const root = this.getRoot(i);
            if(this.heap[root] <= this.heap[i]) break;
            this.swap(i, root);
            i = root;
        }
    }

    bubbleDown(i){
        while(true){

            let smallest = i;
            const left = this.getLeft(i);
            const right = this.getRight(i);

            if(this.heap[left] && this.heap[smallest] > this.heap[left]) smallest = left;
            if(this.heap[right] && this.heap[smallest] > this.heap[right]) smallest = right;
            if(smallest == i) break;

            this.swap(i, smallest);
            i = smallest;
        }   
    }

    swap(i, j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getRoot(i){
        return Math.floor((i-1)/2);
    }

    getLeft(i){
        return i * 2 + 1;
    }

    getRight(i){
        return i * 2 + 2;
    }

    getLength(){
        return this.heap.length;
    }

    getFirst(){
        return this.heap[0];
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {

    let res = 0;

    const heap = new MyMinHeap();
    for(let i = 0; i<nums.length; i++){
        heap.insert(nums[i]);
    }

    while(heap.getLength() > 1 && heap.getFirst() < k){

        const n1 = heap.getMin();
        const n2 = heap.getMin();
        heap.insert(Math.min(n1, n2) * 2 + Math.max(n1,n2));
        res++;
    }

    return res;
};
