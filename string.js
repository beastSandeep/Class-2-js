const str = "Hello";

console.log(str[1]);
// console.log("hello"[1]);

console.log(str.length + 10);
// console.log("hello".length + 10);

console.log(str.toLowerCase().toUpperCase()); // str.toLowerCase() = "hello"
console.log(" mandeep ghotra  ".toUpperCase().trim()); // "MANDEEP GHOTRA"
console.log(" mandeep ghotra  ".trim().toUpperCase().length); // 14

console.log(str[0] + str[1] + str[2] + str[3] + str[4]); // console.log("H" + "e" + "l" + "l" + "o");

const str2 = "hello ji\n\rkya hal";
console.log(str2);
console.log(str2.length);
