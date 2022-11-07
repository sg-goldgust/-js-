let solution = (a, b, c) => {
    let answer = "YES";
    let sum = a + b + c;
    let max = Number.MIN_SAFE_INTEGER;
    if (a > b) max = a;
    else max = b;

    if (c > max) max = c;

    if (sum - max < max) return "NO";

    return answer;
}

console.log(solution(6,7,11));