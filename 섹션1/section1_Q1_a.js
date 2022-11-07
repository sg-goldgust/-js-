let solution = (a, b, c) => {
    let min = (a < b) ? (a < c) ? a : c : (b < c) ? b : c;  
    return min;
}

console.log(solution(2, 5, 1));