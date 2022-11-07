let solution = (arr) => {
    let answer = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[idx] > arr[j]) idx = j;
        }
        if (idx !== i) {
            answer.push(i + 1);
            answer.push(idx + 1);
            break;
        }
    }
    return answer;
}
let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));
