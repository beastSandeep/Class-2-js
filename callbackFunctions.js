function a() {
  console.log("hello world");
}
function aa() {
  console.log("hello world2");
}
function aaa() {
  console.log("hello world3");
}

function b(cb) {
  cb();
}

b(a);
b(aa);
b(aaa);

b(function () {
  console.log("wow");
});

// Most Used way for callbacks
b(() => {
  console.log("wow2");
});

// How data flows in callbacks
function caller(cb) {
  cb("Sandeep", 45);
}

caller((name, num) => {
  console.log(name, num);
});

// How data goes back to caller function
function runner(cb) {
  const returnedValue = cb();
  console.log(returnedValue);
}

// Both Ways are same for returning somthing form an arrow function
// runner(() => 10);
runner(() => {
  return 10;
});
