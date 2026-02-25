var beautifulIndices = function(s, a, b, k){

    const res = new Set();
    let iB = -1, iA = -1;
    let cA = 0, cB = 0, bGo = true;

    while(cA < s.length){

        if(bGo && cB < s.length){
            for(; cB < s.length; cB++){
                if(s[cB] == b[0]){
                    if(s.slice(cB, Math.min(cB + b.length, s.length)) == b){
                        iB = cB;
                        cB ++;
                        bGo = false;
                        break;
                    }
                }
            }

            if(cB >= s.length && bGo) break;
        } 
        
        if(iB == -1) return [];

        if(!bGo) {

            for(; cA < s.length; cA++){

                if(s[cA] == a[0]){

                    if(s.slice(cA, Math.min(cA + a.length, s.length)) == a){

                        iA = cA;
                        
                        if(Math.abs(iA - iB) <= k){
                            res.add(iA);
                            continue;

                        } else {

                            if(iB < iA){
                                bGo = true;
                                break;

                            } else {
                                continue;
                            }
                        }
                    }
                }
            }
        }
    }

    return [...res];
}