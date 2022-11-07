let solution = (s) => {
    let answer;
    let stack = [];
    for (let e of s) {
        if (!isNaN(e)) stack.push(Number(e));
        else {
            let rt = stack.pop();
            let lt = stack.pop();
            if      (e === "+") stack.push(lt + rt);
            else if (e === "-") stack.push(lt - rt);
            else if (e === "*") stack.push(lt * rt);
            else if (e === "/") stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));