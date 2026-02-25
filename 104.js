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
 * @return {number}
 */
var maxDepth = function(root) {
  
    let depth = 0;

    function check(node, d = 0){

        if(!node){
            if(d > depth) depth = d;
            return;
        }
        
        check(node.left, d + 1);
        check(node.right, d + 1);
    }

    check(root);
    return depth;
};
