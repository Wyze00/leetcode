/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {

    const queue = [0];
    const visited = Array(rooms.length).fill(1);


    while(queue.length){

        const pop = queue.pop();
        const keys = rooms[pop];

        if(visited[pop]){

            for(const key of keys){
                queue.push(key);
            }
        }

        visited[pop] = 0;
    }

    return visited.every((e) => e == 0);
};

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));