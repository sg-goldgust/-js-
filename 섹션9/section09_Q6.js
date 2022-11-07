let solution = (s, e) => {
    let answer = 1;
    let dx = [1, 5, -1];
    
    let queue = [];
    let ch = Array.from({length : 10001}, () => 0);
    queue.push(s);
    ch[s] = 1;
    
    while (queue.length) {
        
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let v = queue.shift();
            for (x of dx) {
                let nv = v + x;
                if (nv === e) {
                    return answer++;
                }
                if (ch[nv] == 0) {
                    queue.push(nv);
                    ch[nv] = 1;
                }
                
            }     
        }
        answer++;
    }
    return answer;
}

console.log(solution(5, 14));