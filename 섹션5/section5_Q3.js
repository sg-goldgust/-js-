let solution = (k, arr) => {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        let sum = 0;
        while (i + j < arr.length && k > sum) {
            sum += arr[i + j];
            j++;
            if (k == sum) {
                answer++;
                break;
            }

        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));