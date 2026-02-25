// var trap = function(height) {

//     let res = 0;

//     for(let i = 0; i<height.length-1; i++){

//         let now = height[i];
//         let next = [-1, 0];
//         let temp = 0;
//         let smn = 0;

//         for(let j = i+1; j<height.length; j++){

//             if(j == i+1 && height[j] > now) break;
//             if(height[j] >= next[0]) next = [height[j], j];
//             if(height[j] == next[0]) smn = temp;


//             if(height[j] > now){
//                 res += temp;
//                 i = j-1;
//                 break;

//             } else if(j == height.length-1){

//                 if(next[1] - 1  == i) break;

//                 res += smn - ((now - next[0]) * (next[1] - i - 1));
               
//                 i = next[1]-1;
//                 break;
//             }

//             temp += now - height[j];
//         }
//     }

//     return res;
// };


var trap = function(height) {
    
    let left = 0, right = height.length - 1; 
    let leftMax = 0, rightMax = 0; 
    let res = 0; 

    while (left < right) {

        if (height[left] < height[right]) {
            
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                
                res += leftMax - height[left];
            }
            left++; 
            
        } else {
           
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                
                res += rightMax - height[right];
            }
            right--; 
        }
    }

    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));