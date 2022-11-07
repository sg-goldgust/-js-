let solution = () => {
    let answer;
    let sH = new Map();
    for (let e of str) {
        if (sH.has(e)) {
            sH.set(e, sH.get(e) + 1);
        } else {
            sH.set(e, 1);
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of sH) {
        console.log(key, val, max);
        if (val > max) {
            answer = key;
            max = val;
        }      
    }

    return answer;
}

let str="BACBACCACCBDEDE";
