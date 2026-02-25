/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    if(!head || !head.next) return null;

    const myMap = new Map();
    let idx = 0;
    let slow = head;
    
    while(slow){

        if(!myMap.has(slow)){
            myMap.set(slow, idx++);
        } else {
            return slow;
        }

        slow = slow.next;
    }

    return null;
};


function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

x = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4, null))))
x.next.next.next.next = x.next;

console.log(detectCycle(x));