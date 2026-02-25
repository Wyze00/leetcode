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
var oddEvenList = function(head) {
    
    if(!head) return null;

    let current = head;
    let odd = null;
    let oddtemp = odd;
    let even = null;
    let eventemp = even;
    let temp = 1;

    while(current){

        if(temp){

            if(!odd){
                odd = current;
                oddtemp = current; 
            } else {
                oddtemp.next = current;
                oddtemp = oddtemp.next;
            }

        } else {

            if(!even){
                even = current;
                eventemp = current; 
            } else {
                eventemp.next = current;
                eventemp = eventemp.next;
            }
        }

        current = current.next;
        temp ^= 1;
    }

    oddtemp.next = even;
    if(even) eventemp.next = null;
    return odd;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log(oddEvenList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));