let solution = (str) => {
    let answer = "YES";
    let n = str.length;
    str = str.toUpperCase();
    
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if(str[i] != str[n - i - 1]) {
            answer = "NO";
            break;
        }
    }
    return answer;
}

let str = "goKQoG";
console.log(solution(str));