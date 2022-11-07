let solution = (arr) => {
    let answer = arr;
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i], j;
        for (j = i - 1; j > -1; j--) {
            if (arr[j] > val) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = val;
    }
    return answer;
}
let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));