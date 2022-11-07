let isMento = (arr, mento, mentee) => {
    let rlt = true;

    for (let i = 0; i < arr.length; i++) {      
            if (arr[i].indexOf(mento) > arr[i].indexOf(mentee)) {
                rlt = false;
                break;
            }     
    }

    if (rlt) console.log(mento, mentee);

    return rlt;
}

let solution = (arr) => {
    let answer = 0;
    for (let i = 0; i < arr[0].length - 1; i++) {
        for (let k = 1; k < arr[0].length - i; k++) {
            let mento = arr[0][i];
            let mentee = arr[0][k + i];
            if (isMento(arr, mento, mentee)) answer++;
        }    
    }
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));