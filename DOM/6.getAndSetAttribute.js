// we have some methods to get and set element's attribute
const a = document.getElementById("anchor");

// getAttribute(attributeName) :- it takes a attribute name and returns value of that attribute
const link = a.getAttribute("href");
console.log(link); // https://www.google.com

// setAttribute(attributeName, value) :- it takes a attribute name and value of it, then it just make that value of passes attribute
a.setAttribute("href", "https://www.facebook.com");
a.setAttribute("title", "go to facebook");

// we already did it 😄
a.innerText = "Facebook";

console.log(a.getAttribute("href")); // https://www.facebook.com
