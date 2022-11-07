let solution = (arr) => {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        let sum = 0;       
        while (n != 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        if (sum > max || (sum == max && arr[i] > answer)) {
            max = sum;
            answer = arr[i];
        } 
    }
    
    return answer;
}
let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
