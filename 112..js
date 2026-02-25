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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    if(!root) return false;

    function check(node, s = 0){

        if(!node) return false;
        if(s + node.val == targetSum){
            if(!node.left && !node.right) return true;
        } 

        if(node.left) if(check(node.left, s + node.val)) return true;
        if(node.right) if(check(node.right, s + node.val)) return true;

        return false;
    }


    return check(root);
};

console.log(hasPathSum(new TreeNode(-2, null, new TreeNode(-3)), -5));