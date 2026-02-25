/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    if(!head || !head.next) return head;
    
    let cur = null;


    while(head){

        let temp = head.next;
        
        if(!cur){
            cur = head;
            cur.next = null;
        } else {
            head.next = cur;
            cur = head;
        }

        head = temp;
    }
    
    return cur;
};

console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}