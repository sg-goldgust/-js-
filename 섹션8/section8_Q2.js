let solution = (n) => {
    let answer = '';
    let DFS = (n) => {
        if (n == 0) return;

        DFS(parseInt(n / 2));
        answer += n % 2;
    }
    DFS(n);
    return answer;
}

console.log(solution(11));

