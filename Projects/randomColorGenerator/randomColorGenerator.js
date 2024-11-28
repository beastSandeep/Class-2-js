const btn = document.getElementById("btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  h1.innerText = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
