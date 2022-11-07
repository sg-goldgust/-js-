let solution = (s) => {
    let answer = "";
    let stack = [];
    for (c of s) {
        if (c === '(') stack.push(c);
        else if (c === ')') stack.pop();
        else {
            if (stack.length === 0) answer += c;
        }
    }
    return answer;
}

let str="ABC(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));