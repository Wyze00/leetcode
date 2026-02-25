 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
    if(!root) return [];
    const res = [];
    check(root);

    function check(node){

        if(node.left) check(node.left);
        res.push(node.val);
        if(node.right) check(node.right);
    }
    
    return res;
};