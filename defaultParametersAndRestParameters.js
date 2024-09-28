// 1. Default Parameter
// Old Way
// function add(a, b, c, d) {
//   if (!b) b = 0;
//   if (!c) c = 0;
//   if (!d) d = 0;

//   return a + b + c + d;
// }

// const result = add(2, 3, 10, 10);
// console.log(result);

// New Way
// function add(a = 0, b = 0, c = 0, d = 0) {
//   return a + b + c + d;
// }

// const result = add(12, 8);
// console.log(result);

//
// 2. Rest Parameter
//

function add(...arr) {
  // console.log(arr); // [ 1, 2, 3, 4, 5 ]
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const result = add(1, 2, 3, 4, 5);
console.log(result);
