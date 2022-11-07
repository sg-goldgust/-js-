let solution = (m, weights) => {
    let answer;
    let dy = Array.from({length : m + 1}, () => 0);
    for (w of weights) {
        for (let i = m; i >= w; i-- ) {
            dy[i] = Math.max(dy[i - w] + w, dy[i]);
        }
    }

    answer = dy[m];
    return answer;
}

let solution2 = (m, weights) => {
    let answer = 0;
    let n = weights.length;
    let flag = Array.from({length : n}, () => 0);

    let dfs = (L) => {
        if (L === n) {
            let tmp = 0;
            for (let i = 0; i < n; i++) {
                if (flag[i] === 1 && tmp + weights[i] <= m) tmp += weights[i];
            }
            answer = Math.max(answer, tmp);
            return;
        }
        flag[L] = 1;
        dfs(L + 1);
        flag[L] = 0;
        dfs(L + 1);
    }
    
    dfs(0);

    return answer;
}

let solution3 = (m, weights) => {
    let answer = 0;
    let n = weights.length;
    let dfs = (L, sum) => {
        if (sum > m ) return;
        if (L === n ) {
            answer = Math.max(answer, sum);
            return;
        }

        dfs(L + 1, sum);
        dfs(L + 1, sum + weights[L]);
    }
    dfs(0, 0);
    return answer;
    
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));
console.log(solution2(259, arr));
console.log(solution3(259, arr));
