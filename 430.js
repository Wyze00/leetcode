/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {

    if (!head) return null;
    let current = head;

    while (current) {

        if (current.child) {

            let nextNode = current.next;
            let childHead = flatten(current.child);

            current.next = childHead;
            childHead.prev = current;

            let tail = childHead;
            while (tail.next) {
                tail = tail.next;
            }

            if (nextNode) {
                tail.next = nextNode;
                nextNode.prev = tail;
            }

            current.child = null;
        }

        current = current.next;
    }

    return head;
};



// var flatten = function(head) {


//     function unify(node){

//         let current = node;

//         while(current){

//             if(current.child){

//                 let n = current;
//                 let child = n.child;
//                 current = current.next;

//                 n.child.prev = n; 
//                 n.next = n.child;
//                 n.child = null;  

//                 let ret = unify(n.next);
                
//                 if(ret == child) return n;
//                 ret.next = current;
//                 current.prev = ret;
//             }

//             if(!current.next){
//                 return current;
//             }

//             current = current.next;
//         }
//     }
    
//     unify(head);
//     return head;
// };


function _Node(val,prev,next,child) {
   this.val = val;
   this.prev = prev;
   this.next = next;
   this.child = child;
};