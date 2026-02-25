var doesValidArrayExist = function(derived) {

    if(derived.length == 1) return derived[0] == 0;

    const len = derived.length;    

    if(derived[len-1] == 0){

        const res1 = Array(len);
        res1[len-1] = 0;
        res1[0] = 0;

        for(let i = 0; i<len-1; i++){

            if(res1[i+1] != undefined){

                if(res1[i] ^ res1[i+1] == derived[i]){
                    return true;
                } 

            } else {

                if(res1[i] ^ -0 == derived[i]){
                    res1[i+1] = 0;
                } else {
                    res1[i+1] = 1;
                }
            }
        }

        // Two

        const res2 = Array(len);
        res2[len-1] = 1;
        res2[0] = 1;

        for(let i = 0; i<len-1; i++){

            if(res2[i+1] != undefined){

                if(res2[i] ^ res2[i+1] == derived[i]){
                    return true;
                } 

            } else {

                if(res2[i] ^ -0 == derived[i]){
                    res2[i+1] = 0;
                } else {
                    res2[i+1] = 1;
                }
            }
        }

        return false;        

    } else {

        const res1 = Array(len);
        res1[len-1] = 1;
        res1[0] = 0;

        for(let i = 0; i<len-1; i++){

            if(res1[i+1] != undefined){

                if(res1[i] ^ res1[i+1] == derived[i]){
                    return true;
                } 

            } else {

                if(res1[i] ^ -0 == derived[i]){
                    res1[i+1] = 0;
                } else {
                    res1[i+1] = 1;
                }
            }
        }

        // Two

        const res2 = Array(len);
        res2[len-1] = 0;
        res2[0] = 1;

        for(let i = 0; i<len-1; i++){

            if(res2[i+1] != undefined){

                if(res2[i] ^ res2[i+1] == derived[i]){
                    return true;
                } 

            } else {

                if(res2[i] ^ -0 == derived[i]){
                    res2[i+1] = 0;
                } else {
                    res2[i+1] = 1;
                }
            }
        }

        return false;
    } 
};

console.log(doesValidArrayExist([]));
