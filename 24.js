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
var swapPairs = function(head) {

    if(!head || !head.next) return head

    let nh = new ListNode(0, head);
    let cur = nh;


    while(cur.next && cur.next.next){

        let f = cur.next;
        let s = cur.next.next;

        f.next = s.next;
        s.next = f;
        cur.next = s;

       cur = f;
    }

    return nh.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}