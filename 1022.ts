// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/description

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 
function sumRootToLeaf(root: TreeNode | null): number {
    
    if(!root)
        return 0;

    // Dfs dari root dengan string binary kosong
    return dfs(root, "");
};

function dfs(node: TreeNode, binary: string): number {
    // Base case tidak ada child lagi, balikan convert binary string ke nnumber basis 10
    if (node.left === null && node.right === null)
        return Number.parseInt(binary + node.val, 2);

    // Salah satu child null, traverse child yang ada aja
    if (node.left !== null && node.right === null)
        return dfs(node.left, binary + node.val);
    
    if (node.right !== null && node.left === null)
        return dfs(node.right, binary + node.val);

    // Kedua child ada, traverse keduanya
    return dfs(node.left!, binary + node.val) + dfs(node.right!, binary + node.val);
}