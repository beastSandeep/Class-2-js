function hello(param1, param2) {
  // param1, param2 are pareameters
  console.log(param1);
  console.log(param2);
  console.log("Sandeep");
}

// "Mandeep", "Arsh" are arguments for param1, param2 pareameters
hello("Mandeep", "Arsh");

// Make a function that takes two numbers and it's job is just printing addition of passed numbers
function add(num1, num2) {
  console.log(num1 + num2);
}
add(2, 6);

// Make a function that takes one number and it's job is just printing square of passed number
function square(num) {
  console.log(num * num);
}
square(6);

// Make a function that takes one number and it's job is just printing cube of passed number
function cube(num) {
  // console.log(num * num * num);
  console.log(num ** 3);
}
cube(6);

// Make a function that takes two numbers and it's job is just doing exponents of numbers ex. 3⁵.
function powerOf(num1, num2) {
  // console.log(num * num * num);
  console.log(num1 ** num2);
}
powerOf(3, 5);

// Modified Function with return keyword
function increment(num) {
  const x = num + 1;
  console.log(x);
  return num;
}

console.log(increment(3));

function twice(x) {
  const double = x * 2;
  return double;
  console.log("jajajajajajaj");
}

const six = twice(3); // will return 6
console.log(six);
