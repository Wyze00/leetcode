 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    const n1 = [];
    const n2 = [];

    while(l1 != null){
        n1.push(l1.val);
        l1 = l1.next;
    }

    while(l2 != null){
        n2.push(l2.val);
        l2 = l2.next;
    }

    const sum = String(BigInt(n1.reverse().join('')) + BigInt(n2.reverse().join(''))).split('').map(e=>Number(e)).reverse();
    const res = new ListNode(sum[0]);
    let cur = res;

    for(let i = 1; i<sum.length; i++){
        cur.next = new ListNode(sum[i]);
        cur = cur.next;
    }

    return res;
};


const l1 = df([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2 = df([5,6,4]);


function df(arr){
    const sum = arr;
    const res = new ListNode(sum[0]);
    let cur = res;

    for(let i = 1; i<sum.length; i++){
        cur.next = new ListNode(sum[i]);
        cur = cur.next;
    }

    return res;
}