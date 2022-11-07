let solution = (board) => {
    let answer = 0;
    let n = board.length;
    let dx = [0, 0, 1, -1]; //위 아 오 왼
    let dy = [1, -1, 0, 0];
    let DFS = (x, y) => {
        if (x === n - 1 && y === n - 1) {
            answer++;
            return;
        }

        for (let i = 0; i < 4; i++) {
            let next_x = x + dx[i];
            let next_y = y + dy[i];
            if (next_x >= 0 && next_y >= 0 && next_x < n && next_y < n ) {
                if (board[next_x][next_y] === 0) {
                    board[next_x][next_y] = 1;
                    DFS(next_x, next_y);
                    board[next_x][next_y] = 0;
                }
            }
        }
    }
    board[0][0] = 1;
    DFS(0, 0);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));