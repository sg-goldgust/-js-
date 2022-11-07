let solution = (arr) => {
    let answer = Array.from({length:5}, () => 1);

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[i]) answer[i]++;
        }
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

console.log(Array.from({length:4}, (e, i) => i ));
