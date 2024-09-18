const obj = {
  name: "Anmol",
  age: 19,
  "is maried": false,
  obj2: { key1: "value1" },
};

console.log(obj);
//console.log(obj.obj2.key1); // "value1"

// getting the data form objects
// .(dot) Notation
console.log(obj.name);
console.log(obj.age);
console.log(obj.address);

// [] Notation
console.log(obj["is maried"]);

// setting the data to object (if we use key that already exist, than their value just gonna be updated)
// .(dot) Notation
obj.name = "Tanpreet";
obj.address = "California";

// [] Notation
obj["job"] = "Amazon";
console.log(obj);

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "objValue1";
const value2 = "objValue2";

// I want this
// const computedObject = { objKey1: "objValue1", objKey2: "objValue2" };
const computedObject = {};
// not working
// computedObject.key1 = value1;
computedObject[key1] = value1;
computedObject[key2] = value2;
console.log(computedObject);

const arr = [1, 3, 4];
console.log(arr["length"]); // 😎
