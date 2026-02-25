/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    const myMap = new Map();
    let current = head;
    let idx = 1;

    while(current){
        myMap.set(idx++, current);
        current = current.next;
    }

    const i = idx-n-1;

    if(i == 0){
        return head.next;

    } else {

        const del = myMap.get(i);

        del.next = del.next.next;
        return head;
    }
};