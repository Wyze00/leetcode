/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
    let str = "";

    while(head){

        str += head.val;
        head = head.next;
    }

    let l = 0;
    let r = str.length-1;

    while(l < r){
        if(str[l] !== str[r]) return false;
    }

    return true;
};