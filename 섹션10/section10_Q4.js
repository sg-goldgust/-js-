let solution = (n, coins) => {
    let answer;
    let dy = Array.from({length : n + 1}, () => 0);
    for (e of coins) {
        dy[e] = 1;
        for (let i = e + 1; i < dy.length; i++) {
            dy[i] = Math.min(dy[i], dy[i - e] + 1);
        }
    }
    answer = dy[n];
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));

