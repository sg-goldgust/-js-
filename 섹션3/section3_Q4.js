let solution = (s, c) => {
    let answer = [];
    let cnt = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            cnt = 0;
            answer.push(cnt);
        }
        else {
            cnt++;
            answer.push(cnt);
        }
    }
    cnt = Number.MAX_SAFE_INTEGER;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            cnt = 0;
        } else {
            cnt ++;
            if (answer[i] > cnt) answer[i] = cnt;
        }
    }
    return answer;
}
let str  = "teachermode";
let char = 'e';

console.log(solution(str, char));