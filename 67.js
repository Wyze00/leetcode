/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0').split('');
    b = b.padStart(maxLen, '0').split('');

    for(let i = maxLen-1; i>-1; i--){

        const num = btoi(a[i] += b[i]);

        if(num == 3){
            a[i] = '1';
            if(i == 0) a.unshift('1')
            else a[i-1] += '1';
        } else if(num == 2){
            a[i] = '0';
            if(i == 0) a.unshift('1')
            else a[i-1] += '1';
        } else if(num == 1) a[i] = '1'
        else a[i] = '0';
        
    }

    function btoi(biner){

        let res = 0;
        for(let i = biner.length-1; i>-1; i--){
            res += ~~biner[i];
        }

        return res;
    }

    return a.join('');
};