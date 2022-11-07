let count = (distance, stables) => {
    let cnt = 1;
    let p = stables[0];
    for (let i = 1; i < stables.length; i++) {
        if (stables[i] - p >= distance) {
            cnt++;
            p = stables[i];
        }
    }
    return cnt;
}

let solution = (m, stables) => {
    let answer;
    stables.sort((a, b) => a - b);
    let lt = 1;
    let rt = stables[stables.length - 1] - stables[0];

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(mid, stables) >= m) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));