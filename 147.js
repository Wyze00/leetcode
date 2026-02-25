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
var insertionSortList = function(head) {
        
    for(let i = 1; i<head.length; i++){
            
        let cur = i;
        
        while(cur > 0 && head[cur-1] > head[cur]){
            
            [head[cur-1],head[cur]] = [head[cur],head[cur-1]];
            cur--;
        }    
    }
    
    return head;
};