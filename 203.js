/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    if(!head){
        return null;
    } else if(!head.next){

        if(head.val == val){
            head = head.next
        }

        return head;
    } else {

        
        let current = head;

        while(current && current.next){

            if(current.val == val){
                head = head.next;
                current = head;
            } else if(current.next.val == val){
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return head;
    }
};