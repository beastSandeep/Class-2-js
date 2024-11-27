const btn = document.getElementById("btn");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
