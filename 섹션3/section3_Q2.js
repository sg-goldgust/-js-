let solution = (str) => {
    let answer = "YES";
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    if(str.split('').reverse().join('') != str) answer = "NO";
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuofaa";
console.log(solution(str));