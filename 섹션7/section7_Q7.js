let solution = (arr) => {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ( arr[j][0] > arr[j + 1][0] ||
                (arr[j][0] == arr[j + 1][0] && arr[j][1] > arr[j + 1][1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];                
            } 
        }
    }
    return answer;
}

let solution2 = (arr) => {
    let answer = arr;
    arr.sort((a, b) => {
        if(a[0] == b[0]) return a[1] - b[1];
        else return a[0] - b[0];
    });

    return answer;
}

let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));
console.log(solution2(arr));