/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    
    s1 = s1.split("");
    s2 = s2.split("");
    let ne = 0;
    let idx = -1;

    for(let i = 0; i<s1.length; i++){

        if(s1[i] != s2[i]){

            ne++;
            if(ne == 2){
                [s2[idx], s2[i]] = [s2[i], s2[idx]];
                if(s1.join('') == s2.join('')) return true
                else return false;
            }

            idx = i;
        }
    }
    
    return true;
};