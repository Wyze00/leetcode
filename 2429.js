

var minimizeXor = function(num1, num2) {
    
    const n1 = num1.toString(2).padStart(32, '0').split('');
    const n2 = Array(32).fill('0');
    let len1 = satu(n1);
    let len2 = satu(num2.toString(2));

    if(len1 == len2) return num1;

    if(len1 > len2){

        for(let i = 0; i<n1.length && len2 > 0; i++){
            if(n1[i] === '1'){
                n2[i] = '1';
                len2--;
            }
        }
        
        return parseInt(n2.join(''), 2);
    }

    if(len1 < len2){

        for(let i = 0; i<n1.length; i++){
            if(n1[i] === '1'){
                n2[i] = '1';
                len2--;
            }
        }

        for(let i = n2.length-1; i>-1 && len2 > 0; i--){
            
            if(n2[i] === '0'){
                n2[i] = '1';
                len2--;
            }
        }
        
        return parseInt(n2.join(''), 2);
    }

    function satu(arr){
        let one = 0;
        for(let i = 0; i<arr.length; i++) if(arr[i] === '1') one++;
        return one
    }
};

console.log(minimizeXor(3, 5));