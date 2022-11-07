let solution = (s) => {
    let answer = "";
    let cnt = 1;
    answer += s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            cnt++;
        } else {
            if (cnt != 1) {
                answer += Strng(cnt);
            }
            cnt = 1;
            answer += s[i];
        }
    }
    return answer;
}
let str = "KKHSSSSSSSE";
console.log(solution(str));