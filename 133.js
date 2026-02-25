/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(originalNode){

    if (originalNode === null) return null;

    const visitedMap = new Map();
    visitedMap.set(originalNode, new Node(originalNode.val));

    const queue = [originalNode];

    while (queue.length > 0) {

        const currentNode = queue.shift();

        for (let neighbor of currentNode.neighbors) {

            if (!visitedMap.has(neighbor)) {
                queue.push(neighbor);
                visitedMap.set(neighbor, new Node(neighbor.val));
            }

            const clonedCurrentNode = visitedMap.get(currentNode);
            clonedCurrentNode.neighbors.push(visitedMap.get(neighbor));
        }
    }
    
    return visitedMap.get(originalNode);
}

function _Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};