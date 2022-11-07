let solution = (endTime, scoreTable) => {
    let answer;
    let dp = Array.from({length : endTime + 1}, () => 0);
    
    for (let i = 0; i < scoreTable.length; i++) {
        let time = scoreTable[i][1];
        let score = scoreTable[i][0];
        for (let j = endTime; j >= time; j--) {
            dp[j] = Math.max(dp[j], dp[j - time] + score);
        }
    }
    answer = dp[endTime];
    return answer;
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(20, arr));