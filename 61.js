/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    const myMap = new Map();
    let n = 1;

    while(head){
        myMap.set(n++, head);
        head = head.next;
    }

    n--;
    k = k % n;

    if(k == 0) return myMap.get(1);

    myMap.get(n).next = myMap.get(1);
    head = myMap.get((n - k + 1));
    myMap.get(n - k).next = null;

    return head;
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(rotateRight(new ListNode(0, new ListNode(1, new ListNode(2))), 0));