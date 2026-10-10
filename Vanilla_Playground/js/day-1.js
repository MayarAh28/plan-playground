// 1
console.log(a);
var a = 5;

// 2
console.log(b);
let b = 5;

// 3
{
  var x = 1;
  let y = 2;
}
console.log(x);
console.log(y);

// 4
console.log(typeof notDeclared);
console.log(typeof z);
let z = 1;

// 5
foo();
function foo() {
  console.log("declaration");
}

// 6
bar();
var bar = function () {
  console.log("expression");
};

// 7
for (var i = 0; i < 3; i++) {}
console.log(i);
for (let j = 0; j < 3; j++) {}
console.log(j);

// 8
const person = { name: "A" };
person.name = "B";
console.log(person);
person = {};

// 9
var v = "global";
function test() {
  console.log(v);
  var v = "local";
}
test();

// 10
let s = "outer";
{
  console.log(s);
  let s = "inner";
}
