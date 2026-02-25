
var ProductOfNumbers = function() {
    this.cache = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) { 
    
    if(num == 0){
        this.cache = [1];
    } else {
        this.cache.push(this.cache.at(-1) * num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {

    if(this.cache.length <= k) return 0;
    return this.cache.at(-1) / this.cache.at(- 1 - k);
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
