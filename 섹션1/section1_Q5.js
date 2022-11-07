// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.
// ▣ 입력예제 1 
// 5 3 7 11 2 15 17

let solution = (arr) => {
    let answer = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length; i++) {
        if(answer > arr[i]) answer = arr[i];
    };

    return answer;
}

let solution2 = (arr) => {
    let answer = Number.MAX_SAFE_INTEGER;
    for (let i of arr) {
        if(answer > i) answer = i;
    }
    return answer;
}

let solution3 = (arr) => {
    let answer = Math.min(...arr);   
    return answer;
}

let arr = [5, 3, 7, 11, 2 ,15, 17];
console.log(solution(arr));
console.log(solution2(arr));
console.log(solution3(arr));