let isPrime = (n) => {
    if (n === 1) return false;
    else {
        for (let i = 2; i < parseInt(Math.sqrt(n)); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}

let solution = (arr) => {
    answer = [];
    for (e of arr) {
        s = e.toString().split("").reverse().join("");
        let n = parseInt(s);

        if (isPrime(n)) {
            answer.push(n);
        }
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));