var maxDistance = function(arrays) {

    const res = [];

    for(let i = 0; i<arrays.length; i++){
        
        if(arrays[i].length == 1){
            res.push([arrays[i][0], i]);
            continue;
        }

        res.push([arrays[i][0], i]);
        res.push([arrays[i][arrays[i].length-1], i]);
    }

    const tmp = res.sort((a,b) => a[0]-b[0]);

    for(let i = 0, j = tmp.length-1; i<j;){

        if(tmp[i][1] != tmp[j][1]) return Math.abs(tmp[i][0] - tmp[j][0]);   

        const sP = Math.abs(tmp[i+1][0] - tmp[j][0]);
        const lM = Math.abs(tmp[i][0] - tmp[j-1][0]);

        if(sP > lM) return sP
        else return lM;

    }
};
