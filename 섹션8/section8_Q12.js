let solution = (n, r) => {
    let answer;
    console.log(n);
    let dy= Array.from(Array(n + 1), () => Array(r + 1).fill(0));
    
    let dfs = (n, r) => {
        if (dy[n][r] > 0) return dy[n][r];
        if (n === r || r ===0) {
            return 1;
        }
        dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r);
        return dy[n][r];

    }
    answer = dfs(n, r);

    return answer;
}


console.log(solution(33, 19));