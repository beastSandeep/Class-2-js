// We have a global object called "window". Inside javascript that provided by browsers
// window object depends on where javascript is currently running
console.log(window);

// all functions are stored in window object as methods
function aaa() {
  console.log("aaa");
}

// so we can run a function like this also
aaa();
window.aaa();
