// const x = "vlaue 10";

// function myApp() {
//   const x = "vlaue 1";

//   function myFunc() {
//     const x = "vlaue 59";
//     console.log("inside myFunc", x);
//   }

//   function muFunc2() {
//     const x = "vlaue 35";
//     console.log("inside myFunc2", x);
//   }

//   console.log("inside myApp", x);
//   muFunc2();
//   myFunc();
// }

// myApp();

const myVar = "value 1";

function myApp() {
  function myFunc() {
    const myVar = "Sandeep";

    const myFunc2 = () => {
      console.log("inside myFunc2", myVar); // inside myFunc2 Sandeep
    };

    myFunc2();
    console.log(myVar); // Sandeep
  }

  console.log(myVar); // value 1
  myFunc();
}
myApp();
