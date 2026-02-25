const eventualSafeNodes = (graph) => {
    const n = graph.length; 
    const color = new Array(n).fill(0); 

    const dfs = (nodeIndex) => {

        if (color[nodeIndex]) {
            return color[nodeIndex] === 2;
        }

        color[nodeIndex] = 1; 
        for (const neighbor of graph[nodeIndex]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        
        color[nodeIndex] = 2; 
        return true; 
    };

    let res = []; 
    for (let i = 0; i < n; ++i) {
        if (dfs(i)) {
            res.push(i);
        }
    }
    return res; 
};