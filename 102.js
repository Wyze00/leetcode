function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    const res = [];
    let temp = [];
    if(!root) return res
    
    let queue = [root];

    while(queue.length != 0){

        const nQueue = [];

        for(let i = 0; i<queue.length; i++){
            temp.push(queue[i].val);
            if(queue[i].left) nQueue.push(queue[i].left);
            if(queue[i].right) nQueue.push(queue[i].right);
        }

        res.push(temp);
        temp = [];
        queue = nQueue;
    }

    return res;
};

console.log(levelOrder(new TreeNode(1)));