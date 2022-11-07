let solution = (need, plan) => {
    let answer = "YES";
    let arr = [];
    for (let e of plan) {
        if (need.indexOf(e) > -1) arr.push(e); 
    }
    let str = arr.join('');
    if (need !== str) answer = "NO";
    return answer;
}

let solution2 = (need, plan) => {
    let answer = "YES";
    let queue = need.split('');
    for (let e of plan) {
        if (queue.includes(e)) {
            if (queue.shift() !== e) return "NO"
        }
    }
    if (queue.length > 0) answer = "NO";
    return answer;
}

let a="CBA";
let b="CABDGE";
console.log(solution(a, b));