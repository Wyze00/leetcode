
// var findRedundantConnection = function(edges) {

//     const tmp = {};
//     for(let i = 0; i<edges.length; i++){

//         if(tmp[edges[i][0]]){
//             tmp[edges[i][0]].push(edges[i][1]);
//         } else {
//             tmp[edges[i][0]] = [edges[i][1]];
//         }

//         if(tmp[edges[i][1]]){
//             tmp[edges[i][1]].push(edges[i][0]);
//         } else {
//             tmp[edges[i][1]] = [edges[i][0]];
//         }
//     }
// };


var findRedundantConnection = (edges) => {

    const parent = Array.from({ length: edges.length }, (_, index) => index);

    function find(node) {

        if (parent[node] !== node) {
            parent[node] = find(parent[node]);
        }

        return parent[node];
    }

    for (let [nodeA, nodeB] of edges) {

        if (find(nodeA) === find(nodeB)) {
            return [nodeA, nodeB];
        }

        parent[find(nodeA)] = find(nodeB);
    }

    return [];
};


console.log(findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]));

