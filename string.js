const str = "Hello";

console.log(str[1]);
// console.log("Hello"[1]);

console.log(str.length + 10);
// console.log("Hello".length + 10);

console.log(str.toLowerCase().toUpperCase()); // str.toLowerCase() = "hello"
console.log(" mandeep ghotra  ".toUpperCase().trim()); // "MANDEEP GHOTRA"
console.log(" mandeep ghotra  ".trim().toUpperCase().length); // 14

console.log(
  str[0].toUpperCase() +
    str[1].toUpperCase() +
    str[2].toUpperCase() +
    str[3].toUpperCase() +
    str[4].toUpperCase()
); // console.log("H" + "E" + "L" + "L" + "O");

const str2 = "hello ji\n\rkya hal";
console.log(str2);
console.log(str2.length);
