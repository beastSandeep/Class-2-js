function a() {
  function b() {
    const y = "hello";
    console.log("inside myFunc", y);
  }
  b();
  console.log(y);
}
a();

console.log(y);
