let solution = (n, m, arr) => {
    arr.sort((a, b) => (b - a));
    let sums = [];
    //let set_sums = new Set();

    outer_loop:
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length - i; j++) {
            for (let k = j + 1; k <= arr.length - j; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                if (sums.indexOf(sum) < 0) sums.push(sum);
                //set_sums.add(sum);
                if (sums.length == m) break outer_loop;
            }
        }
    }
    console.log(sums);
    return sums[m - 1];
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));