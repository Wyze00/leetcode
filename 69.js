/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    const exp = Math.exp(0.5 * Math.log(x)).toString(10);

    if(exp.includes('.')){

        for(let i = exp.indexOf('.')+1; i<exp.length-1; i++){
            if(exp[i] != '9'){
                return Math.floor(exp);
            }
        }

        return Math.ceil(exp);

    } else {
        return Number(exp);
    }
};