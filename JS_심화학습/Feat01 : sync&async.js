let fn1 = () => {
  console.log(3);
};

let fn2 = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 3000);
};

//fn2(fn1);
// 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
let devide = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 !== 0) {
      resolve(num1 / num2);
    } else {
      reject(new Error("0으로 나눌 수 없습니다."));
    }
  });
};

// devide(10, 5)
//   .then((value) => console.log("성공:", value))
//   .catch((error) => console.log("실패:", error));