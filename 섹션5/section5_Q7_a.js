let solution = (str1, str2) => {
    let answer = "YES";
    let charToCnt = new Map();

    for (let e of str1) {
        if (charToCnt.has(e)) {
            charToCnt.set(e, charToCnt.get(e) + 1);
        }
        else {
            charToCnt.set(e, 1);
        }
    }
    
    charToCnt.forEach((v, k) => {
        console.log(k + "의 갯수는 " + v );
    });

    for (e of str2) {
        if (charToCnt.has(e) && charToCnt.get(e) > 0 ) {
            charToCnt.set(e, charToCnt.get(e) - 1);
        }
        else {
            return "NO";
        }
    }

    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));

