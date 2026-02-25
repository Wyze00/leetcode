var gridGame = function (arr){

    let left = 0, right = 0, res = Infinity, n = arr[0].length;
    
    for(let i  = 0; i<arr[1].length; i++) left += arr[1][i];
    arr[0].push(0);
    
    for(let i = 0; i<arr[1].length; i++){
  
        right += arr[0][n--];
        left -= arr[1][n];
        
        const max = Math.max(left, right);
        if(max < res) res = max;
    }
  
    return res;
}

