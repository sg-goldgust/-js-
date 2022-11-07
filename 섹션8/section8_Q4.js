let solution = (n) => {
    let flag = Array.from({length : n + 1}, () => true);

    let DFS = (m) => {
        if (m > n) {
            let answer = "";
            for (let i = 1; i < flag.length; i++ ) {
                if (flag[i]) answer += i + " ";        
            }
            console.log(answer);
            return;
        };
        DFS(m + 1);
        flag[m] = !flag[m];
        DFS(m + 1);
        flag[m] = !flag[m];
    }

    DFS(1);

}

solution(3);