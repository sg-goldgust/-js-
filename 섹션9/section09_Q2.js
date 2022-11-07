let solution = (v, edges) => {
    let answer = 0;
    let graph = Array.from(Array(v + 1), () => Array(v + 1).fill(0));
    let ch = Array.from({length : v + 1}, () => 0);

    for (let [s, e] of edges) {
        graph[s][e] = 1;
    }
    let DFS = (L) => {
        ch[L] = 1;

        if (L === v) {
            answer++;
            return
        }

        for (let i = 1; i < graph.length; i++) {
            if (graph[L][i] === 1 && ch[i] === 0) {
                DFS(i);
                ch[i] = 0;
            }
        }
    }

    DFS(1);

    return answer;
}



let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));