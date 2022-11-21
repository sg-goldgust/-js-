let solution = (board, moves) => {
  let answer = 0;
  let stack = [];
  for (e of moves) {
    let pos = e - 1;
    for (let i = 0; i < board.length; i++) {
      let doll = board[i][pos];
      if (doll !== 0) {
        if (stack[stack.length - 1] === doll) {
          answer += 2;
          stack.pop();
        } else {
          stack.push(doll);
          board[i][pos] = 0;
        }
        break;
      }
    }
  }
  return answer;
};

let solution2 = (board, moves) => {
  let answer = 0;
  let stack = [];
  for (i of moves) {
    let pos = i - 1;
    for (let j = 0; j < board.length; j++) {
      let doll = board[j][pos];
      if (doll === 0) continue;
      else {
        board[j][pos] = 0;
        if (stack.length == 0) {
          stack.push(doll);
        } else {
          if (stack[stack.length - 1] === doll) {
            answer += 2;
            stack.pop();
          } else {
            stack.push(doll);
          }
        }

        break;
      }
    }
  }
  return answer;
};

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution2(a, b));
