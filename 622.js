/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = Array(k);
    this.head = 0;
    this.tail = 0;
    this.size = k;
    this.cur = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {

    if(this.isFull()) return false;

    if(this.tail == this.head && this.cur == 0){
        this.queue[this.tail] = value;
    } else {
        this.queue[this.tail = ++this.tail % this.size] = value;
    }

    this.cur++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {

    if(this.isEmpty()) return false;

    if(this.cur != 1){
        this.head = ++this.head % this.size;
    } 

    this.cur--;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {

    if(this.isEmpty()) return -1;
    return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {

    if(this.isEmpty()) return -1;
    return this.queue[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.cur == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.cur == this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear();     // return 3
// console.log(myCircularQueue.Rear());
// myCircularQueue.isFull();   // return True
console.log(myCircularQueue.isFull());
// myCircularQueue.deQueue();  // return True
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.queue);
myCircularQueue.enQueue(4); // return True
console.log(myCircularQueue.queue);
// myCircularQueue.Rear();     // return 4
console.log(myCircularQueue.Rear());
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.deQueue());
console.log(myCircularQueue.deQueue());

console.log(myCircularQueue.isEmpty());
console.log(myCircularQueue.enQueue(5));
console.log(myCircularQueue.enQueue(10));

console.log(myCircularQueue.Rear());
console.log(myCircularQueue.Front());
console.log(myCircularQueue.queue);