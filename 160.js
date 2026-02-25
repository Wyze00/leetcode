/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    const myMap =  new Map();

    while(headA || headB){

        if(headA){

            if(!myMap.has(headA)){
                myMap.set(headA, true);
            } else {
                return headA;
            }

            headA = headA.next;
        }

        if(headB){

            if(!myMap.has(headB)){
                myMap.set(headB, true);
            } else {
                return headB;
            }

            headB = headB.next;
        }
    }

    return null;
};