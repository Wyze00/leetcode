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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    if(!root) return res

    function check(node){

        if(node.left) check(node.left);
        if(node.right) check(node.right);
        res.push(node.val);
    }

    check(root);
    return res;
};