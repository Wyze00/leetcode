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
var isValidBST = function(root) {

    const value = [];

    function inOrder(node){

        if(!node){
            return;
        }

        inOrder(node.left);
        value.push(node.val);
        inOrder(node.right);
    }

    inOrder(root);

    for(let i = 1; i<value.length; i++){
        if(value[i] <= value[i-1]) return false;
    }
    
    return true;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));