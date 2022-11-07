let solution = (arr) => {
    
    let answer = [...arr];
    let tot = arr.reduce((a, b) => a + b);
    outerLoop :
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (100 === tot - arr[i] - arr[j]) {
                answer.splice(j, 1);
                answer.splice(i, 1);
                break outerLoop;
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));