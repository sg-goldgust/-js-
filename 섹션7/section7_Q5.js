let solution = (size, arr) => {
    let answer = Array.from({length:size}, (v, i) =>  0);
    arr.forEach((v, idx) => {
        let pos = answer.indexOf(v);
        if (pos < 0) {
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        } else {
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
        }
        answer[0] = v;
    })
    return answer;

}
let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
