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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {

    if(!root) return null;

    if(val > root.val){

        if(root.right){
            insertIntoBST(root.right, val);
        } else {
            root.right = new TreeNode(val);
            return root;
        }

    } else {

        if(root.left){
            insertIntoBST(root.left, val);
        } else {
            root.left = new TreeNode(val);
            return root;
        }
    }

    return root;
};

console.log(insertIntoBST([4,2,7,1,3], 5));