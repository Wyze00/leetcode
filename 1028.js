/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {

    const pre = traversal.split('');

    let ctr = 0;
    while(ctr < pre.length && pre[ctr] != '-') ctr++;

    const root = new TreeNode(Number(pre.splice(0, ctr)));

    function build(node, traversal, depth){

        if(!traversal.length) return;

        if(traversal.length > depth && traversal.slice(0, depth).every(e=>e=='-') && traversal[depth] != '-'){

            traversal.splice(0, depth);

            let ctr = 0;
            while(ctr < traversal.length && traversal[ctr] != '-') ctr++;

            node.left = new TreeNode(Number(traversal.splice(0, ctr).join('')));
            build(node.left, traversal, depth + 1);
        }

        if(!traversal.length) return;

        if(traversal.length > depth && traversal.slice(0, depth).every(e=>e=='-') && traversal[depth] != '-'){

            traversal.splice(0, depth)

            let ctr = 0;
            while(ctr < traversal.length && traversal[ctr] != '-') ctr++;

            node.right = new TreeNode(Number(traversal.splice(0, ctr).join('')));
            build(node.right, traversal, depth+1);
        }
    }

    build(root, pre, 1);
    return root;
};



console.log(recoverFromPreorder("1-401--349---90--88"));

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
