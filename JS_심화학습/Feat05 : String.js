// 문자열 리터럴은 다음과 같은 형식을 사용합니다
let s1 = "Hello World";
let s2 = "This is String"; //작은 쉼표를 사용 , prettier 설정으로 변경
let s3 = String("Nice to meet U");
// 문자열 리터럴은 template leteral 을 사용할 수 있습니다
let person1 = { name: "Nunu", age: 27 };
let s4 = `Hi! my name is ${person1.name} and age is ${person1.age}`;
// 긴 문자열 리터럴은 두가지 방법을 사용할 수 있습니다
let s5 =
  "여러 줄에 작성해야 할 정도로 " +
  "긴 문자열을 여러 줄에 나눠서 적으면 " +
  "가독성이 올라갑니다!";
let s6 =
  "다른 방법으로 긴 문자열을 \
여러 줄에 나줘서 적을 수가 있어요! \
참 쉽죠~";
// 문자 접근은 두 가지 방법을 사용할 수 있습니다. es5에서는 문자열을 배열과 같은 오브젝트 취급합니다
let s7 = "cat".charAt(1);
let s8 = "cat"[1];
// 문자열에서 가장 많이 사용되는 작업들은 다음과 같습니다 .
let s9 = "CoffeeBean";
let len = s9.length;
let s10 = "Hello " + s9;
let idx = "Hello CoffeeBean".indexOf("Coffee");
let s11 = "Nunu and Dodo".substring(0, 4);
// 문자열 비교는 연산자를 통해 비교할 수 있습니다 .
var a = "a";
var b = "b";
if (a < b) {
  // true
  console.log(a + " is less than " + b);
} else if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(a + " and " + b + " are equal.");
}
// 문자열 메서드 사용하기 : anagram
let anagram = "pop";
if (anagram.split("").reverse().join("") == anagram)
  console.log("It is anagram");
// 문자열 메서드 사용하기 : regExp 공백 제거하기
let str = "a b c d e";
str = str.replace(/ /g, "");
console.log(str);
//
let arr1 = [1, 2, 3];
console.log(arr1[-2]);

let david;
