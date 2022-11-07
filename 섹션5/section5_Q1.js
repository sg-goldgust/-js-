let solution = (arr1, arr2) => {
    let answer= [];
    let m = arr1.length;
    let n = arr2.length;
    let pi = pj = 0;

    while (pi < m && pj < n) {
        if (arr1[pi] < arr2[pj]) answer.push(arr1[pi++]);
        else answer.push(arr2[pj++]);
    }
    while (pi < m) {
        answer.push(arr1[pi++]);
    }
    while (pj < n) {
        answer.push(arr2[pj++]);
    }

    return answer;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution(a, b));