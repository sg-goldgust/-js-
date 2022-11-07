let solution = (str) => {
    let answer = [];
    str = str.toLowerCase().replace(/[^0-9]/g, '');

    for (let i = 0; i < str.length; i++) {
        if (str[i] != 0 || str.indexOf('0') != i) answer.push(str[i]);
    } 
    answer = parseInt(answer.join(''))

    return answer;
}

let solution2 = (s) => {
    let answer = "";
    for (let e of s) {
        if (!isNaN(e)) answer += e;       
    }
    answer =  parseInt(answer)
    return answer;
}

let str="g0000en2T0s8eSoft";
console.log(solution2(str));