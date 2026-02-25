/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {

    const idx = new Map();
    const rand = new Map();
    const myMap = new Map();

    const newHead = isi(head);
    res(newHead);
    return newHead;

    function isi(head){

        const newHead = null;
        let current = null;
        let n = 0;


        while(head){

            if(!newHead){

                newHead = new _Node(head.val, null, null);
                current = newHead;
                myMap.set(newHead, n);

            }  else {
                current.next = new _Node(head.val, null, null);
                current = current.next;
                myMap.set(current, n);
            }

            rand.set(head, head.random);
            idx.set(head, n);            
            head = head.next;
            n++;
        }

        idx.set(null, -1);
        return newHead;
    }


    function res(newHead){

        for(const node of rand.values()){

            const get = idx.get(node);

            newHead.random = myMap.get(get);
            newHead = newHead.next;
        }

    }
};

function _Node(val, next, random) {
   this.val = val;
   this.next = next;
   this.random = random;
};