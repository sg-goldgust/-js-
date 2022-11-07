let solution = (n, coins) => {
    let answer = Number.MAX_SAFE_INTEGER;
    let DFS = (L, sum) => {
        if(sum > n) return;
        if(L >= answer) return;
        if (n === sum) {
            answer = Math.min(answer, L);
            return;
        } 
        for (e of coins) {
           
            DFS(L + 1, sum + e);
        }
    }
    DFS(0, 0)
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));