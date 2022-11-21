/* 변수 생성 과정은 선언 단계(Declaration phase)  
             => 초기화 단계(Initialization phase) 
             => 할당 단계(Assignment phase) 이렇게 총 세 단계를 거쳐 생성 */

/*  JavaScript에서 호이스팅(hoisting)이란, 
    인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미합니다. 
    var (ES5)로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화합니다. 
    반면 let과 const (ES6)로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않습니다. */

/*  인터프리터(interpreter)
    - 프로그램 실행시 한 번에 한 문장씩 번역한다.
    - 한번에 한문장씩 번역후 실행 시키기 때문에 실행 시간이 느리다.
    - 컴파일러와 같은 오브젝트 코드 생성과정이 없기 때문에 메모리 효율이 좋다.
    - 프로그램을 실행시키고 나서 오류를 발견하면 바로 실행을 중지 시킨다. 실행 후에 오류를 알 수 있다.
    - 대표적인 언어로 Python, Ruby, Javascript 등이 있다. */

/*
    - var : 변수의 재선언/재할당 모두 가능, Hoisting이 되어 변수를 선언하기 전에 참조할 수 있다.
    - let: 변수의 재선언은 불가능하나 재할당은 가능, 변수를 선언하기 전에 참조할 수 없으나, 변수를 선언할 시 할당을 반드시 할 필요는 없다.
    - const: 변수의 재선언/재할당 모두 불가능, 변수를 선언하기 전에 참조할 수 없으며, 변수를 선언할 시 할당을 반드시 해야 한다.
*/

console.log(a);
var a = "a";
console.log(a);
let b;
//console.log(b); 변수 선언 전에 참조가 불가능하다
b = "b";
console.log(b);
const c = "cc";
//c = "c"; 재할당 불가능하다
