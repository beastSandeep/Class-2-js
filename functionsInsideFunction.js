function app() {
  const myFunc = () => {
    console.log("hello from myFunc");
  };

  const add = (num1, num2) => {
    console.log(num1 + num2);
  };

  const multiply = (num1, num2) => {
    console.log(num1 * num2);
  };

  console.log("Inside app");

  multiply(3, 5);
  myFunc();
  add(3, 5);
}

app();
