let solution = (arr) => {
    let n = arr.length;
    let total = [].reduce((a, b) => a + b, 0);
    let answer = "NO";
    let flag = Array.from({length : n} , () => 0);
    let dfs = (L) => {
        console.log(L);
        if(answer === "yes") return;

        if(L === n + 1) {
            let tmp = 0;
            for (let i = 0; i < n; i++) {
                if (flag[i] === 1) tmp += arr[i];
            }
            if (tmp === total - tmp) answer = "YES";

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

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));