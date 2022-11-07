//forEach, map, filter, reduce

/*
function forEach(callback, thisArg) {
    for(let i = 0; i < arr.length; i++) {
        callback(a[i], i);    
    }    
}
*/

[1, 2, 3, 4, 5].forEach((v, i)=>{
    console.log(v, i, this);
});

/* 원본배열과 새로운 배열 길이가 동일  undefind
function map(callback, thisArg) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        list.push(callback(arr[i]));    
    }
    return list;
}
*/

let answer = [1, 2, 3, 4, 5].map((v, i) => {
    return v*v;
})
console.log(answer);

let answer2 = [1, 2, 3, 4, 5].filter((v, i) => {
    return v % 2 == 1;
})
console.log(answer2);

function reduce(callback,val) {
   let result;
   for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
   }
   return result; 
}

let answer3 = [1, 2, 3, 4, 5].reduce((acc, v) => {
    return acc + v;
}, 10);
console.log(answer3);