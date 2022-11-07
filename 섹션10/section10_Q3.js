let solution = (arr) => {
    let answer;
    let dy = Array.from({length : arr.length}, () => 0);
    dy[0] = 1
    for (let i = 1; i < arr.length; i++) {
        let max = 1
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[i]) {
                max = Math.max(dy[j] + 1, max);
            }
        }
        dy[i] = max;
    }
    answer = Math.max(...dy);
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));