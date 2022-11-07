// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
// 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u
// ▣ 입력예제 2
// good
// ▣ 출력예제 2

let solution = (str) => {
    let answer;
    let length = str.length;
    //slice , splice - arr function. 
    // if (length % 2 === 0) answer =str.slice(length / 2 - 1, length / 2 + 2);
    // else answer = str.slice(parseInt(length / 2) , length / 2 + 1);
    
    //charAt , substring, substr - str function.
    //''.charAt
    //''.substring
    //''.substr
    if (length % 2 === 0) answer = str.substr(length / 2 - 1, 2);
    else answer = str.charAt(parseInt(length / 2));

    return answer;
}

console.log(solution('good'));