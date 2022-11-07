let count = (size, songs) => {
    let cnt = 1;
    let capacity = 0;
    for (e of songs) {
        if (capacity + e > size) {
            cnt++;
            capacity = e;
        } else {
            capacity += e;
        }
    }
    return cnt;
}

let solution = (m, songs) => {
    let answer;
    songs.sort((a, b) => a - b);
    let lt = songs[songs.length - 1];
    let rt = songs.reduce((a, b) => a + b);

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(mid, songs) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    return answer;
}


let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));