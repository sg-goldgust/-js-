const minsoo = {
  name: "민수",
  age: 30,
};

const people = ["chulsoo", "yeppi"];

//기존
var name = minsoo.name;
var age = minsoo.age;

var chulsoo = people[0];
var yeppi = people[1];

//ES6
var { name1, age1 } = minsoo;
var [chulsoo1, yeppi1] = people;
