/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    const first = image[sr][sc];

    function bfs(i, j){

        if(image[i][j] !== first || image[i][j] == color ){
            return;
        }

        image[i][j] = color;

        for(const [x, y] of dir){

            const newI = i + x;
            const newJ = j + y;

            if(newI > -1 && newI < image.length && newJ > -1 && newJ < image[i].length){
                bfs(newI, newJ);
            }
        }
    }

    bfs(sr, sc);
    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 0,0, 1));