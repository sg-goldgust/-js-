let solution = (a, b) => {
    let answer = "YES";
    let sH = new Map();

    for (let e of a) {        
        if (sH.has(e)) sH.set(e, sH.get(e) + 1);
        else sH.set(e, 1);
    }
    for (let e of b) {
        if (!sH.has(e) || sH.get(e) == 0) answer = "NO";
        else sH.set(e, sH.get(e) - 1);
    }
    return answer;
}
let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));