let solution = (a, b) => {
    let answer = 0;
    let sH = new Map();
    for (let e of b) {
        if (sH.has(e)) sH.set(e, sH.get(e) + 1);
        else sH.set(e, 1);
    }
    let n = b.length;
    for (let i = 0; i < a.length - n; i++) {
        let 
    }
    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));