let solution = (k, thingsTable) => {
    let answer;
    let dp = Array.from({length : k + 1}, () => 0);
    for (let i = 0; i < thingsTable.length; i++) {
        let w = thingsTable[i][0];
        let v = thingsTable[i][1];
        for (let j = k; j >= w; j--) {
            dp[j] = Math.max(dp[j], dp[j - w] + v);
        } 
    }
    answer = dp[k];

    return answer;
}

let arr = [[6, 13], [4, 8], [3, 6], [5, 12]];
console.log(solution(7, arr));