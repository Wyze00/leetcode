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
 * @return {number}
 */
var minDepth = function(root) {
    
    if(!root) return 0;
    let res = Infinity;

    function check(node, d = 1){

        if(d >= res) return;
        if(!node.left && !node.right) if(d < res) res = d;

        if(node.left) check(node.left, d + 1);
        if(node.right) check(node.right, d + 1);
    }

    check(root);
    return res;
};


console.log(minDepth(new TreeNode(2, new TreeNode(3), new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))))));