let solution = (s) => {
    let answer = "YES";
    let stack = [];
    for (c of s) {
        if (c === '(') stack.push(c);
        else {
            if (stack.length === 0) return "NO";
            stack.pop();
        } 
    }
    if (stack.length > 0) answer = "NO";
    return answer;
}

let a="(()(()))(())";
console.log(solution(a));
