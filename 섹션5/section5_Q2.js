let solution = (arr1, arr2) => {
    let answer = [];
    let m = arr1.length;
    let n = arr2.length;
    let pi = pj = 0;

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    while (pi < m && pj < n) {
        if (arr1[pi] === arr2[pj]) {
            answer.push(arr1[pi++]);
            pj++;
        } else if (arr1[pi] > arr2[pj])  pj++;
          else pi++;
    }
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));