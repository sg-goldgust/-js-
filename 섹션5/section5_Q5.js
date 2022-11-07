let solution = (n, arr) => {
    let answer;
    let t = answer = (arr[0] + arr[1] + arr[2]);
    for (let i = 3; i < arr.length; i++) {
        t += (arr[i] - arr[i - n]);
        if (t > answer) answer = t;
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
