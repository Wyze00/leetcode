/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {

    const res = [];
    const mySet = new Set();

    function backtrack(tree, size){

        for(let i = 1; i<=n; i++){

            if(mySet.has(i)) continue;

            const cur = tree ? tree : null;

            if(cur = null){
                cur = new TreeNode(i);
                mySet.add(i);
            }

            
        
        }
    }

};

console.log(generateTrees(3));

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}