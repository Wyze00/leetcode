var MyQueue = function() {
    this.queue = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
    this.queue.unshift(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
    return this.queue.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
    return this.empty() ? -1 : this.queue[this.queue.length-1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

x = new MyQueue();
x.push(1)
x.push(2)

console.log(x.peek());
console.log(x.pop());