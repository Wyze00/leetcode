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
 */
var FindElements = function(root) {
    this.root = this.init(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {

    if(!this.root) return false;
    
    function check(node){

        if(node.val == target) return true;

        if(node.left) if(check(node.left)) return true;
        if(node.right) if(check(node.right)) return true;
        
        return false;
    }

    return check(this.root);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

FindElements.prototype.init = function(root){


    if(!root) return null;
    root.val = 0;
    check(root);
            
    function check(node){

        if(node.left){
            node.left.val = node.val * 2 + 1;
            check(node.left);
        }

        if(node.right){
            node.right.val = node.val * 2 + 2;
            check(node.right);
        }
    }

    return root;
}

x = new FindElements(new TreeNode(-1, null, new TreeNode(-1)));

console.log(x.root);

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}