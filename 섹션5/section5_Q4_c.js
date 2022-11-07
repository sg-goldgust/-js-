let solution = (n, arr) => {
    let answer = 0;
    
    for (let pi = 0; pi < arr.length; pi++) {
        let sum = arr[pi];
        let pj = pi;
        while (sum <= n) {
            answer++;
            sum += arr[pj++];
        }
    }
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
        