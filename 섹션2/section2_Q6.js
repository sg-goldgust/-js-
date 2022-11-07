let solution = (arr) => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum_x = 0;
    let sum_y = 0;
    let sum_cross_left  = 0;
    let sum_cross_right = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            sum_x += arr[i][j];
            sum_y += arr[j][i];
            if(i === j)     sum_cross_left += arr[i][j];
            if(i + j === arr.length - 1) sum_cross_right += arr[i][j]; 
        }
        max = (sum_x > sum_y) ? (sum_x > max) ? sum_x : max : (sum_y > max) ? sum_y : max;
        sum_x = 0;
        sum_y = 0;        
    }
    if (sum_cross_left > max)  max = sum_cross_left;
    if (sum_cross_right > max) max = sum_cross_right;
    return max;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));