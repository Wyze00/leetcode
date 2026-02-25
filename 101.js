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
 * @return {boolean}
 */
var isSymmetric = function(root) {


    function check(a, b){

        if(!a && !b) return true;
        if(!a && b || !b && a) return false;
        if(a.val != b.val) return false;

        if(!check(a.left, b.right)) return false;
        if(!check(a.right, b.left)) return false;

        return true;
    }

    return check(root.left, root.right);
};

console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(42)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))));