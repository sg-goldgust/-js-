let solution = (arr_A, arr_B) => {
    let answer = [];
    for (let i = 0; i < arr_A.length; i++) {
        if(arr_A[i] === arr_B[i]) answer.push('D');
        else if (arr_A[i] === 1 && arr_B[i] === 3) answer.push('A');
        else if (arr_A[i] === 2 && arr_B[i] === 1) answer.push('A');
        else if (arr_A[i] === 3 && arr_B[i] === 2) answer.push('A');
        else answer.push('B');
    }
    return answer;
}
let arr_A = [2, 3, 3, 1, 3];
let arr_B = [1, 1, 2, 2, 3];

console.log(solution(arr_A, arr_B));